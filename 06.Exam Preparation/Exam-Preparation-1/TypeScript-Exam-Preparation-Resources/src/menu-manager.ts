import { Client, MenuItemType } from "./models";
import { BaseMenuItem, findItemById } from "./menu-item-types";

export class MenuManager {
    private menuItems: BaseMenuItem[] = [];
    private clients: Map<number, Client[]> = new Map();

    addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item);
        this.clients.set(item.id, []);

        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
    }

    registerClient(itemId: number, client: Client): string {
        const itemClientList = this.clients.get(itemId)

        if (!itemClientList) {
            return `ERROR: Menu item with ID ${itemId} not found.`;
        }

        itemClientList.push(client);
        return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;
    }

    listAllItems(): string[] {
        const result: string[] = ['--- List of All Menu Items ---'];

        this.menuItems.forEach(item => result.push(`[${MenuItemType[item.type].toUpperCase()}] ${item.name} (${item.weightGrams}g) - Calories: ${item.getCalories().toFixed(2)}`));

        return result;
    }

    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById<BaseMenuItem>(this.menuItems, itemId);
    }
}