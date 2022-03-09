import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
    id_client: string;
}

export class FindAllClientDeliveriesUseCases {
    async execute({ id_client }: IFindAllDeliveries) {
        const clientDeliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            select: {
                id: true,
                username: true,
                deliveries: true,
            }
        });

        return clientDeliveries
    }
}