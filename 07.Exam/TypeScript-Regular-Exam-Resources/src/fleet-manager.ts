import { Driver, VehicleCategory } from "./models";
import { BaseVehicle, findItemById, SUV, Sedan, Truck } from "./vehicle-types";

export class FleetManager {
    private vehicles: BaseVehicle[] = [];
    private drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this.vehicles.push(item);
        this.drivers.set(item.id, []);

        return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {
        const driverCollection = this.drivers.get(vehicleId);

        if (!driverCollection) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`;
        }

        driverCollection.push(driver);
        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`;
    }

    listAllVehicles(): string[] {
        const result = ['--- List of All Vehicles ---'];

        for (const vehicle of this.vehicles) {
            const model = vehicle.model;
            const engineCC = vehicle.engineCC;
            const category = VehicleCategory[vehicle.category];
            const price = vehicle.getMaintenanceCost().toFixed(2);

            let specificDetail: string;

            if (vehicle instanceof Sedan) {
                specificDetail = `Passengers ${vehicle.passengerCount}`;
            } else if (vehicle instanceof SUV) {
                specificDetail = `4WD: ${vehicle.fourWheelDrive}`;
            } else if (vehicle instanceof Truck) {
                specificDetail = `Payload ${vehicle.payloadTons}t`;
            } else {
                specificDetail = '';
            }

            result.push(`[${category}] ${model} (${engineCC}cc, ${specificDetail}) - Maintenance: ${price}`)
        }

        result.push('---------------------------');
        return result;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById<BaseVehicle>(this.vehicles, vehicleId);
    }
}