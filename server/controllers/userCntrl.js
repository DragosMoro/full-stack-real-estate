import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";
export const createUser = asyncHandler(async (req, res) => {
  console.log("create a user");
  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User Registered Successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already registered" });
  }
});

export const bookVisit = asyncHandler(async (req, res) => {
  console.log("book a visit");
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisists: true,
      },
    });
    console.log(alreadyBooked);
    if (alreadyBooked.bookedVisists.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "You have already booked this visit" });
    } else {
      const bookedVisit = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          bookedVisists: {
            push: { id, date },
          },
        },
      });
      res.status(201).json({ message: "Visit booked successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisists: true,
      },
    });
    res.status(201).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisists: true,
      },
    });
    const index = user.bookedVisists.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(400).json({ message: "Visit not found" });
    } else {
      user.bookedVisists.splice(index, 1);
      await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          bookedVisists: user.bookedVisists,
        },
      });
      res.status(201).send({ message: "Booking cancelled successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addResidencyToFavorite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.status(201).send({
        message: "Residency removed from favorites",
        user: updateUser,
      });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res
        .status(201)
        .send({ message: "Residency added to favorites", user: updateUser });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAllFauvoriteResidencies = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResidencies = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        favResidenciesID: true,
      },
    });
    res.status(200).send(favResidencies);
  } catch (error) {
    throw new Error(error.message);
  }
});
