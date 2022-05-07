import { CartItem } from 'models/cart.model';
import { IPurchaseItem } from 'models/purchase.model';

export function cartToPurchaseItem(item: CartItem): IPurchaseItem {
    return {
        productId: item.id,
        quantity: item.count,
        // TODO currency should not be hardcoded
        currencyCode: 'USD',
    };
}
