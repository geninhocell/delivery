import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing!"
        })
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, "98a0d7a30bd854dec24f7a09dee6431fb7d70e33") as IPayload

        request.id_deliveryman = sub

        return next()
    } catch (e) {
        return response.status(401).json({
            message: "Token invalid!"
        })
    }
}