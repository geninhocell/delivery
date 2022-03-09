import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCases } from "./FindAllClientDeliveriesUseCase";

export class FindAllClientDeliveriesController {
    async handle(request: Request, response: Response) {
        const { id_client } = request

        const findAllClientDeliveriesUseCases = new FindAllClientDeliveriesUseCases()
        const clientDeliveries = await findAllClientDeliveriesUseCases.execute({
            id_client
        });

        return response.json(clientDeliveries)
    }
}