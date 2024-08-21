/**
 * @schema AdminProductVariantInventoryLink
 * type: object
 * description: The product's ID.
 * x-schemaName: AdminProductVariantInventoryLink
 * required:
 *   - productService
 *   - inventoryService
 * properties:
 *   productService:
 *     type: object
 *     description: The id's productservice.
 *     required:
 *       - variant_id
 *     properties:
 *       variant_id:
 *         type: string
 *         title: variant_id
 *         description: The productservice's variant id.
 *   inventoryService:
 *     type: object
 *     description: The id's inventoryservice.
 *     required:
 *       - inventory_item_id
 *     properties:
 *       inventory_item_id:
 *         type: string
 *         title: inventory_item_id
 *         description: The inventoryservice's inventory item id.
 * 
*/

