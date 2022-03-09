import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
    id_deliveryman: string;
}

export class FindAllDeliverymanDeliveriesUseCase {
    async execute({ id_deliveryman }: IFindAllDeliveries) {
        const deliveries = await prisma.deliveryman.findMany({
            where: {
                id: id_deliveryman
            },
            select: {
                id: true,
                username: true,
                deliveries: true,
            }
        })

        return deliveries
    }
}