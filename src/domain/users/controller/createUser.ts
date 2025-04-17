import { StatusCodes } from 'http-status-codes'
import { TCommonRes, TCustomReq } from '../../../types.js'
import catchAsync from '../../../utils/catchAsync.js'
import { TCreateUserSchema } from '../schema.js'
import { Prisma, user } from '@prisma/client'
import prisma from '../../../utils/usePrisma.js'

export const createUser = catchAsync(async (req: TCustomReq<TCreateUserSchema>, res: TCommonRes<user>) => {
  const { email, fullName, phoneNumber, hasDownloadedApp } = req.body

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        fullName,
        phoneNumber,
        hasDownloadedApp: hasDownloadedApp ?? false,
      },
    });
    return res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: 'Email is already registered',
      });
    }

  }
})
