// Array containing your exact product data

const initialMockData = [
    { id: "P001", name: "FreshWave Sardines", category: "Canned Goods", quantity: 250, price: 28.00 },
    { id: "P002", name: "Golden Harvest Beef", category: "Canned Goods", quantity: 180, price: 42.00 },
    { id: "P003", name: "Ocean Star Tuna", category: "Canned Goods", quantity: 220, price: 38.00 },
    { id: "P004", name: "Sunny Fruit Mix", category: "Canned Goods", quantity: 90, price: 65.00 },
    { id: "P005", name: "Farm Choice Beans", category: "Canned Goods", quantity: 140, price: 32.00 },
    { id: "P006", name: "Silver Coast Sardines", category: "Canned Goods", quantity: 170, price: 27.00 },
    { id: "P007", name: "UrbanFit T-Shirt", category: "Clothing", quantity: 75, price: 199.00 },
    { id: "P008", name: "BlueTrail Jeans", category: "Clothing", quantity: 40, price: 699.00 },
    { id: "P009", name: "NorthPeak Hoodie", category: "Clothing", quantity: 25, price: 899.00 },
    { id: "P010", name: "ComfortWear Polo", category: "Clothing", quantity: 50, price: 350.00 },
    { id: "P011", name: "FlexStyle Leggings", category: "Clothing", quantity: 60, price: 299.00 },
    { id: "P012", name: "EasyFit Shorts", category: "Clothing", quantity: 45, price: 250.00 },
    { id: "P013", name: "SilverEdge Spoon Set", category: "Kitchen Goods", quantity: 60, price: 150.00 },
    { id: "P014", name: "Crystal Plate Set", category: "Kitchen Goods", quantity: 35, price: 120.00 },
    { id: "P015", name: "ChefMaster Cooking Pot", category: "Kitchen Goods", quantity: 18, price: 750.00 },
    { id: "P016", name: "FreshLock Container Set", category: "Kitchen Goods", quantity: 55, price: 220.00 },
    { id: "P017", name: "ClearView Measuring Cup", category: "Kitchen Goods", quantity: 30, price: 180.00 },
    { id: "P018", name: "HeatGuard Frying Pan", category: "Kitchen Goods", quantity: 22, price: 650.00 },
    { id: "P019", name: "PureGrain Rice Pack", category: "Non-Perishable Items", quantity: 120, price: 285.00 },
    { id: "P020", name: "SweetBlend Sugar Pack", category: "Non-Perishable Items", quantity: 100, price: 95.00 },
    { id: "P021", name: "Baker's Choice Flour", category: "Non-Perishable Items", quantity: 80, price: 58.00 },
    { id: "P022", name: "QuickMeal Noodle Pack", category: "Non-Perishable Items", quantity: 150, price: 89.00 },
    { id: "P023", name: "NutriPlus Milk Powder", category: "Non-Perishable Items", quantity: 65, price: 420.00 },
    { id: "P024", name: "MorningBrew Coffee Mix", category: "Non-Perishable Items", quantity: 110, price: 85.00 },
    { id: "P025", name: "HealthyHarvest Oats", category: "Non-Perishable Items", quantity: 70, price: 145.00 }
];

let productsDatabase = JSON.parse(localStorage.getItem("globalProducts")) || initialMockData;
function saveToStorage() {
    localStorage.setItem("globalProducts", JSON.stringify(productsDatabase));
}

if (!localStorage.getItem("globalProducts")) {
    saveToStorage();
}

// Master database holding your exact order datasets
const initialOrdersMockData = [
    // PENDING ORDERS (10 Records)
    { id: "ORD001", productName: "FreshWave Sardines", qty: 100, orderDate: "06/01/2026", deliveryDate: "06/08/2026", status: "Pending" },
    { id: "ORD002", productName: "Golden Harvest Beef", qty: 80, orderDate: "06/02/2026", deliveryDate: "06/09/2026", status: "Pending" },
    { id: "ORD003", productName: "Ocean Star Tuna", qty: 120, orderDate: "06/02/2026", deliveryDate: "06/10/2026", status: "Pending" },
    { id: "ORD004", productName: "UrbanFit T-Shirt", qty: 50, orderDate: "06/03/2026", deliveryDate: "06/11/2026", status: "Pending" },
    { id: "ORD005", productName: "BlueTrail Jeans", qty: 30, orderDate: "06/03/2026", deliveryDate: "06/12/2026", status: "Pending" },
    { id: "ORD006", productName: "ChefMaster Cooking Pot", qty: 25, orderDate: "06/04/2026", deliveryDate: "06/13/2026", status: "Pending" },
    { id: "ORD007", productName: "Crystal Plate Set", qty: 40, orderDate: "06/04/2026", deliveryDate: "06/13/2026", status: "Pending" },
    { id: "ORD008", productName: "PureGrain Rice Pack", qty: 60, orderDate: "06/05/2026", deliveryDate: "06/14/2026", status: "Pending" },
    { id: "ORD009", productName: "SweetBlend Sugar Pack", qty: 70, orderDate: "06/05/2026", deliveryDate: "06/14/2026", status: "Pending" },
    { id: "ORD010", productName: "MorningBrew Coffee Mix", qty: 45, orderDate: "06/06/2026", deliveryDate: "06/15/2026", status: "Pending" },

    // IN TRANSIT ORDERS (15 Records)
    { id: "ORD011", productName: "FreshWave Sardines", qty: 80, orderDate: "06/01/2026", deliveryDate: "06/07/2026", status: "In Transit" },
    { id: "ORD012", productName: "Golden Harvest Beef", qty: 60, orderDate: "06/01/2026", deliveryDate: "06/07/2026", status: "In Transit" },
    { id: "ORD013", productName: "Ocean Star Tuna", qty: 90, orderDate: "06/02/2026", deliveryDate: "06/08/2026", status: "In Transit" },
    { id: "ORD014", productName: "Sunny Fruit Mix", qty: 40, orderDate: "06/02/2026", deliveryDate: "06/08/2026", status: "In Transit" },
    { id: "ORD015", productName: "Farm Choice Beans", qty: 70, orderDate: "06/03/2026", deliveryDate: "06/09/2026", status: "In Transit" },
    { id: "ORD016", productName: "UrbanFit T-Shirt", qty: 30, orderDate: "06/03/2026", deliveryDate: "06/09/2026", status: "In Transit" },
    { id: "ORD017", productName: "BlueTrail Jeans", qty: 20, orderDate: "06/03/2026", deliveryDate: "06/10/2026", status: "In Transit" },
    { id: "ORD018", productName: "NorthPeak Hoodie", qty: 15, orderDate: "06/04/2026", deliveryDate: "06/10/2026", status: "In Transit" },
    { id: "ORD019", productName: "ComfortWear Polo", qty: 35, orderDate: "06/04/2026", deliveryDate: "06/10/2026", status: "In Transit" },
    { id: "ORD020", productName: "SilverEdge Spoon Set", qty: 25, orderDate: "06/04/2026", deliveryDate: "06/11/2026", status: "In Transit" },
    { id: "ORD021", productName: "Crystal Plate Set", qty: 30, orderDate: "06/05/2026", deliveryDate: "06/11/2026", status: "In Transit" },
    { id: "ORD022", productName: "ChefMaster Cooking Pot", qty: 12, orderDate: "06/05/2026", deliveryDate: "06/12/2026", status: "In Transit" },
    { id: "ORD023", productName: "PureGrain Rice Pack", qty: 50, orderDate: "06/05/2026", deliveryDate: "06/12/2026", status: "In Transit" },
    { id: "ORD024", productName: "SweetBlend Sugar Pack", qty: 40, orderDate: "06/06/2026", deliveryDate: "06/13/2026", status: "In Transit" },
    { id: "ORD025", productName: "MorningBrew Coffee Mix", qty: 25, orderDate: "06/06/2026", deliveryDate: "06/13/2026", status: "In Transit" },

    // DELIVERED ORDERS (13 Records)
    { id: "ORD026", productName: "FreshWave Sardines", qty: 100, orderDate: "05/20/2026", deliveryDate: "05/27/2026", status: "Delivered" },
    { id: "ORD027", productName: "Golden Harvest Beef", qty: 75, orderDate: "05/20/2026", deliveryDate: "05/27/2026", status: "Delivered" },
    { id: "ORD028", productName: "Ocean Star Tuna", qty: 90, orderDate: "05/21/2026", deliveryDate: "05/28/2026", status: "Delivered" },
    { id: "ORD029", productName: "Sunny Fruit Mix", qty: 50, orderDate: "05/21/2026", deliveryDate: "05/28/2026", status: "Delivered" },
    { id: "ORD030", productName: "Farm Choice Beans", qty: 80, orderDate: "05/22/2026", deliveryDate: "05/29/2026", status: "Delivered" },
    { id: "ORD031", productName: "UrbanFit T-Shirt", qty: 40, orderDate: "05/22/2026", deliveryDate: "05/29/2026", status: "Delivered" },
    { id: "ORD032", productName: "BlueTrail Jeans", qty: 25, orderDate: "05/23/2026", deliveryDate: "05/30/2026", status: "Delivered" },
    { id: "ORD033", productName: "ComfortWear Polo", qty: 35, orderDate: "05/23/2026", deliveryDate: "05/30/2026", status: "Delivered" },
    { id: "ORD034", productName: "SilverEdge Spoon Set", qty: 30, orderDate: "05/24/2026", deliveryDate: "05/31/2026", status: "Delivered" },
    { id: "ORD035", productName: "Crystal Plate Set", qty: 20, orderDate: "05/24/2026", deliveryDate: "05/31/2026", status: "Delivered" },
    { id: "ORD036", productName: "PureGrain Rice Pack", qty: 60, orderDate: "05/25/2026", deliveryDate: "06/01/2026", status: "Delivered" },
    { id: "ORD037", productName: "SweetBlend Sugar Pack", qty: 50, orderDate: "05/25/2026", deliveryDate: "06/01/2026", status: "Delivered" },
    { id: "ORD038", productName: "HealthyHarvest Oats", qty: 35, orderDate: "05/26/2026", deliveryDate: "06/02/2026", status: "Delivered" }
];

let ordersDatabase = JSON.parse(localStorage.getItem("globalOrders")) || initialOrdersMockData;
function saveOrdersToStorage() {
    localStorage.setItem("globalOrders", JSON.stringify(ordersDatabase));
}

if (!localStorage.getItem("globalOrders")) {
    saveOrdersToStorage();
}

// Master database holding exact Stock In Records
const initialStockInMock = [
    { id: "SI001", date: "2026-06-01", prodId: "P001", prodName: "FreshWave Sardines", qty: 50, supplier: "Cebu Trading Co." },
    { id: "SI002", date: "2026-06-01", prodId: "P008", prodName: "BlueTrail Jeans", qty: 20, supplier: "Fashion Supply PH" },
    { id: "SI003", date: "2026-06-02", prodId: "P015", prodName: "ChefMaster Cooking Pot", qty: 10, supplier: "KitchenPro Supplies" },
    { id: "SI004", date: "2026-06-03", prodId: "P019", prodName: "PureGrain Rice Pack", qty: 40, supplier: "AgroFoods Corp" },
    { id: "SI005", date: "2026-06-04", prodId: "P023", prodName: "NutriPlus Milk Powder", qty: 25, supplier: "DairyMax Distributor" },
    { id: "SI006", date: "2026-06-05", prodId: "P012", prodName: "EasyFit Shorts", qty: 15, supplier: "UrbanWear Supplier" }
];

// 2. Connect it to browser storage
let stockInDatabase = JSON.parse(localStorage.getItem("globalStockIn")) || initialStockInMock;

// 3. Persistence handler helper
function saveStockInToStorage() {
    localStorage.setItem("globalStockIn", JSON.stringify(stockInDatabase));
}

// 4. Initial commit if storage is empty
if (!localStorage.getItem("globalStockIn")) {
    saveStockInToStorage();
}

// Master database holding exact Stock Out Records (Delivered Only)
const initialStockOutMock = [
    { id: "SO001", orderId: "ORD026", prodName: "FreshWave Sardines", qty: 100, delDate: "05/27/2026", reason: "Customer Order Fulfilled" },
    { id: "SO002", orderId: "ORD027", prodName: "Golden Harvest Beef", qty: 75, delDate: "05/27/2026", reason: "Wholesale Delivery" },
    { id: "SO003", orderId: "ORD028", prodName: "Ocean Star Tuna", qty: 90, delDate: "05/28/2026", reason: "Customer Order Fulfilled" },
    { id: "SO004", orderId: "ORD029", prodName: "Sunny Fruit Mix", qty: 50, delDate: "05/28/2026", reason: "Retail Store Supply" },
    { id: "SO005", orderId: "ORD030", prodName: "Farm Choice Beans", qty: 80, delDate: "05/29/2026", reason: "Wholesale Delivery" },
    { id: "SO006", orderId: "ORD031", prodName: "UrbanFit T-Shirt", qty: 40, delDate: "05/29/2026", reason: "Online Customer Order" },
    { id: "SO007", orderId: "ORD032", prodName: "BlueTrail Jeans", qty: 25, delDate: "05/30/2026", reason: "Retail Store Restock" },
    { id: "SO008", orderId: "ORD033", prodName: "ComfortWear Polo", qty: 35, delDate: "05/30/2026", reason: "Online Customer Order" },
    { id: "SO009", orderId: "ORD034", prodName: "SilverEdge Spoon Set", qty: 30, delDate: "05/31/2026", reason: "Household Supply Order" },
    { id: "SO010", orderId: "ORD035", prodName: "Crystal Plate Set", qty: 20, delDate: "05/31/2026", reason: "Household Supply Order" },
    { id: "SO011", orderId: "ORD036", prodName: "PureGrain Rice Pack", qty: 60, delDate: "06/01/2026", reason: "Grocery Store Delivery" },
    { id: "SO012", orderId: "ORD037", prodName: "SweetBlend Sugar Pack", qty: 50, delDate: "06/01/2026", reason: "Grocery Store Delivery" },
    { id: "SO013", orderId: "ORD038", prodName: "HealthyHarvest Oats", qty: 35, delDate: "06/02/2026", reason: "Health Store Supply" }
];

// 2. Wire them to look into localStorage with the fallback:
let stockOutDatabase = JSON.parse(localStorage.getItem("globalStockOut")) || initialStockOutMock;
function saveStockOutToStorage() {
    localStorage.setItem("globalStockOut", JSON.stringify(stockOutDatabase));
}
if (!localStorage.getItem("globalStockOut")) saveStockOutToStorage();



// Master database holding exact Transaction Log entries
const initialTransactionMock = [
    { id: "TR001", type: "Stock In", ref: "SI001", prodId: "P001", qty: "+50", effect: "Increase" },
    { id: "TR002", type: "Stock In", ref: "SI002", prodId: "P008", qty: "+20", effect: "Increase" },
    { id: "TR003", type: "Stock In", ref: "SI003", prodId: "P015", qty: "+10", effect: "Increase" },
    { id: "TR004", type: "Stock In", ref: "SI004", prodId: "P019", qty: "+40", effect: "Increase" },
    { id: "TR005", type: "Stock In", ref: "SI005", prodId: "P023", qty: "+25", borderEffect: "Increase", effect: "Increase" },
    { id: "TR006", type: "Stock In", ref: "SI006", prodId: "P012", qty: "+15", effect: "Increase" },
    { id: "TR007", type: "Stock Out", ref: "ORD026", prodId: "P001", qty: "-100", effect: "Decrease" },
    { id: "TR008", type: "Stock Out", ref: "ORD027", prodId: "P002", qty: "-75", effect: "Decrease" },
    { id: "TR009", type: "Stock Out", ref: "ORD028", prodId: "P003", qty: "-90", effect: "Decrease" },
    { id: "TR010", type: "Stock Out", ref: "ORD029", prodId: "P004", qty: "-50", effect: "Decrease" },
    { id: "TR011", type: "Stock Out", ref: "ORD030", prodId: "P005", qty: "-80", effect: "Decrease" },
    { id: "TR012", type: "Stock Out", ref: "ORD031", prodId: "P007", qty: "-40", effect: "Decrease" },
    { id: "TR013", type: "Stock Out", ref: "ORD032", prodId: "P008", qty: "-25", effect: "Decrease" },
    { id: "TR014", type: "Stock Out", ref: "ORD033", prodId: "P010", qty: "-35", effect: "Decrease" },
    { id: "TR015", type: "Stock Out", ref: "ORD034", prodId: "P013", qty: "-30", effect: "Decrease" },
    { id: "TR016", type: "Stock Out", ref: "ORD035", prodId: "P014", qty: "-20", effect: "Decrease" },
    { id: "TR017", type: "Stock Out", ref: "ORD036", prodId: "P019", qty: "-60", effect: "Decrease" },
    { id: "TR018", type: "Stock Out", ref: "ORD037", prodId: "P020", qty: "-50", effect: "Decrease" },
    { id: "TR019", type: "Stock Out", ref: "ORD038", prodId: "P025", qty: "-35", effect: "Decrease" }
];

// 2. Connect it to browser storage
let transactionDatabase = JSON.parse(localStorage.getItem("globalTransactions")) || initialTransactionMock;

// 3. Persistence utility helper
function saveTransactionsToStorage() {
    localStorage.setItem("globalTransactions", JSON.stringify(transactionDatabase));
}

// 4. Initial commit if storage is empty
if (!localStorage.getItem("globalTransactions")) {
    saveTransactionsToStorage();
}

// Master database holding exact Delivery History Logs
const initialHistoryMock = [
    { id: "DH001", orderId: "ORD026", prodName: "FreshWave Sardines", qty: 100, orderDate: "05/20/2026", delDate: "05/27/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH002", orderId: "ORD027", prodName: "Golden Harvest Beef", qty: 75, orderDate: "05/20/2026", delDate: "05/27/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH003", orderId: "ORD028", prodName: "Ocean Star Tuna", qty: 90, orderDate: "05/21/2026", delDate: "05/28/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH004", orderId: "ORD029", prodName: "Sunny Fruit Mix", qty: 50, orderDate: "05/21/2026", delDate: "05/28/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH005", orderId: "ORD030", prodName: "Farm Choice Beans", qty: 80, orderDate: "05/22/2026", delDate: "05/29/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH006", orderId: "ORD031", prodName: "UrbanFit T-Shirt", qty: 40, orderDate: "05/22/2026", delDate: "05/29/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH007", orderId: "ORD032", prodName: "BlueTrail Jeans", qty: 25, orderDate: "05/23/2026", delDate: "05/30/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH008", orderId: "ORD033", prodName: "ComfortWear Polo", qty: 35, orderDate: "05/23/2026", delDate: "05/30/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH009", orderId: "ORD034", prodName: "SilverEdge Spoon Set", qty: 30, orderDate: "05/24/2026", delDate: "05/31/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH010", orderId: "ORD035", prodName: "Crystal Plate Set", qty: 20, orderDate: "05/24/2026", delDate: "05/31/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH011", orderId: "ORD036", prodName: "PureGrain Rice Pack", qty: 60, orderDate: "05/25/2026", delDate: "06/01/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH012", orderId: "ORD037", prodName: "SweetBlend Sugar Pack", qty: 50, orderDate: "05/25/2026", delDate: "06/01/2026", status: "Delivered", remarks: "Completed" },
    { id: "DH013", orderId: "ORD038", prodName: "Healthy Harvest Oats", qty: 35, orderDate: "05/26/2026", delDate: "06/02/2026", status: "Delivered", remarks: "Completed" }
];

let deliveryHistoryDatabase = JSON.parse(localStorage.getItem("globalDeliveryHistory")) || initialHistoryMock;
function saveDeliveryHistoryToStorage() {
    localStorage.setItem("globalDeliveryHistory", JSON.stringify(deliveryHistoryDatabase));
}
if (!localStorage.getItem("globalDeliveryHistory")) {
    saveDeliveryHistoryToStorage();
}

// Master tracking check ledger database containing live tracking logs
const initialTrackingLogsMock = {
    "ORD011": [
        { time: "06/01/2026 08:15 AM", status: "Purchase order received" },
        { time: "06/01/2026 10:30 AM", status: "Inventory allocated" },
        { time: "06/01/2026 02:15 PM", status: "Items picked from storage" },
        { time: "06/02/2026 08:00 AM", status: "Packed and labeled" },
        { time: "06/02/2026 10:45 AM", status: "Loaded onto transport vehicle" },
        { time: "06/03/2026 09:20 AM", status: "Departed Central Warehouse" },
        { time: "06/04/2026 11:15 AM", status: "Arrived at Bacolod Distribution Center" },
        { time: "06/06/2026 04:30 PM", status: "In Transit" }
    ],
    "ORD012": [
        { time: "06/01/2026 09:00 AM", status: "Purchase order received" },
        { time: "06/01/2026 11:20 AM", status: "Inventory allocated" },
        { time: "06/01/2026 03:10 PM", status: "Items picked from storage" },
        { time: "06/02/2026 09:15 AM", status: "Packed and labeled" },
        { time: "06/02/2026 11:30 AM", status: "Loaded onto truck" },
        { time: "06/03/2026 08:45 AM", status: "Departed Central Warehouse" },
        { time: "06/04/2026 10:20 AM", status: "Arrived at Regional Hub" },
        { time: "06/06/2026 03:50 PM", status: "In Transit" }
    ],
    "ORD013": [
        { time: "06/02/2026 08:10 AM", status: "Purchase order received" },
        { time: "06/02/2026 10:00 AM", status: "Inventory allocated" },
        { time: "06/02/2026 01:40 PM", status: "Items picked" },
        { time: "06/03/2026 08:20 AM", status: "Packed and labeled" },
        { time: "06/03/2026 10:30 AM", status: "Loaded onto vehicle" },
        { time: "06/04/2026 09:00 AM", status: "Departed warehouse" },
        { time: "06/05/2026 01:20 PM", status: "Arrived at logistics hub" },
        { time: "06/06/2026 04:15 PM", status: "In Transit" }
    ],
    "ORD014": [
        { time: "06/02/2026 09:30 AM", status: "Purchase order received" },
        { time: "06/02/2026 11:45 AM", status: "Inventory allocated" },
        { time: "06/02/2026 02:50 PM", status: "Picking completed" },
        { time: "06/03/2026 09:10 AM", status: "Packed and labeled" },
        { time: "06/03/2026 01:00 PM", status: "Loaded onto truck" },
        { time: "06/04/2026 08:15 AM", status: "Shipment departed warehouse" },
        { time: "06/05/2026 11:00 AM", status: "Arrived at regional hub" },
        { time: "06/06/2026 02:40 PM", status: "In Transit" }
    ],
    "ORD015": [
        { time: "06/03/2026 08:00 AM", status: "Purchase order received" },
        { time: "06/03/2026 10:10 AM", status: "Inventory allocated" },
        { time: "06/03/2026 01:30 PM", status: "Items picked" },
        { time: "06/04/2026 08:30 AM", status: "Packed and labeled" },
        { time: "06/04/2026 11:20 AM", status: "Loaded onto transport vehicle" },
        { time: "06/05/2026 09:10 AM", status: "Departed warehouse" },
        { time: "06/06/2026 10:30 AM", status: "Arrived at distribution center" },
        { time: "06/06/2026 01:55 PM", status: "In Transit" }
    ],
    "ORD016": [
        { time: "06/03/2026 08:45 AM", status: "Purchase order received" },
        { time: "06/03/2026 11:15 AM", status: "Inventory allocated" },
        { time: "06/03/2026 02:40 PM", status: "Picking completed" },
        { time: "06/04/2026 09:00 AM", status: "Packed and labeled" },
        { time: "06/04/2026 12:30 PM", status: "Loaded onto truck" },
        { time: "06/05/2026 08:45 AM", status: "Shipment departed warehouse" },
        { time: "06/06/2026 09:20 AM", status: "Arrived at regional hub" },
        { time: "06/06/2026 03:20 PM", status: "In Transit" }
    ],
    "ORD017": [
        { time: "06/03/2026 09:30 AM", status: "Purchase order received" },
        { time: "06/03/2026 12:00 PM", status: "Inventory allocated" },
        { time: "06/03/2026 03:20 PM", status: "Items picked" },
        { time: "06/04/2026 09:45 AM", status: "Packed and labeled" },
        { time: "06/04/2026 01:10 PM", status: "Loaded onto truck" },
        { time: "06/05/2026 10:15 AM", status: "Shipment departed warehouse" },
        { time: "06/06/2026 11:00 AM", status: "Arrived at logistics hub" },
        { time: "06/06/2026 04:05 PM", status: "In Transit" }
    ],
    "ORD018": [
        { time: "06/04/2026 08:20 AM", status: "Purchase order received" },
        { time: "06/04/2026 10:40 AM", status: "Inventory allocated" },
        { time: "06/04/2026 02:00 PM", status: "Picking completed" },
        { time: "06/05/2026 08:15 AM", status: "Packed and labeled" },
        { time: "06/05/2026 11:45 AM", status: "Loaded onto truck" },
        { time: "06/06/2026 11:45 AM", status: "In Transit" }
    ],
    "ORD019": [
        { time: "06/04/2026 09:15 AM", status: "Purchase order received" },
        { time: "06/04/2026 11:30 AM", status: "Inventory allocated" },
        { time: "06/04/2026 03:15 PM", status: "Items picked" },
        { time: "06/05/2026 09:30 AM", status: "Packed and labeled" },
        { time: "06/05/2026 01:20 PM", status: "Shipment departed warehouse" },
        { time: "06/06/2026 12:30 PM", status: "In Transit" }
    ],
    "ORD020": [
        { time: "06/04/2026 10:00 AM", status: "Purchase order received" },
        { time: "06/04/2026 12:20 PM", status: "Inventory allocated" },
        { time: "06/04/2026 04:10 PM", status: "Picking completed" },
        { time: "06/05/2026 10:15 AM", status: "Packed and labeled" },
        { time: "06/05/2026 02:30 PM", status: "Loaded onto truck" },
        { time: "06/06/2026 03:10 PM", status: "In Transit" }
    ],
    "ORD021": [
        { time: "06/05/2026 08:10 AM", status: "Purchase order received" },
        { time: "06/05/2026 10:45 AM", status: "Inventory allocated" },
        { time: "06/05/2026 01:30 PM", status: "Items picked" },
        { time: "06/05/2026 04:20 PM", status: "Packed and labeled" },
        { time: "06/06/2026 01:15 PM", status: "In Transit" }
    ],
    "ORD022": [
        { time: "06/05/2026 09:00 AM", status: "Purchase order received" },
        { time: "06/05/2026 11:15 AM", status: "Inventory allocated" },
        { time: "06/05/2026 02:45 PM", status: "Picking completed" },
        { time: "06/05/2026 05:10 PM", status: "Packed and labeled" },
        { time: "06/06/2026 10:50 AM", status: "In Transit" }
    ],
    "ORD023": [
        { time: "06/05/2026 09:30 AM", status: "Purchase order received" },
        { time: "06/05/2026 12:10 PM", status: "Inventory allocated" },
        { time: "06/05/2026 03:30 PM", status: "Items picked" },
        { time: "06/06/2026 09:10 AM", status: "Packed and labeled" },
        { time: "06/06/2026 02:25 PM", status: "In Transit" }
    ],
    "ORD024": [
        { time: "06/06/2026 08:15 AM", status: "Purchase order received" },
        { time: "06/06/2026 10:20 AM", status: "Inventory allocated" },
        { time: "06/06/2026 12:45 PM", status: "Picking completed" },
        { time: "06/06/2026 01:45 PM", status: "Packed and labeled" },
        { time: "06/06/2026 04:20 PM", status: "In Transit" }
    ],
    "ORD025": [
        { time: "06/06/2026 08:45 AM", status: "Purchase order received" },
        { time: "06/06/2026 10:50 AM", status: "Inventory allocated" },
        { time: "06/06/2026 01:15 PM", status: "Items picked" },
        { time: "06/06/2026 02:20 PM", status: "Packed and labeled" },
        { time: "06/06/2026 05:00 PM", status: "In Transit" }
    ]
};

// 2. Load from browser memory or default to the mock log collection
let deliveryTrackingLogs = JSON.parse(localStorage.getItem("globalTrackingLogs")) || initialTrackingLogsMock;

// 3. Simple persistence engine utility helper
function saveTrackingLogsToStorage() {
    localStorage.setItem("globalTrackingLogs", JSON.stringify(deliveryTrackingLogs));
}

// 4. Initial commit write if local cache is fresh
if (!localStorage.getItem("globalTrackingLogs")) {
    saveTrackingLogsToStorage();
}

// Master database holding newly requested Stock History items
const initialStockHistoryMock = [
    { auditId: "AUD001", dateTime: "05/27/2026 09:15 AM", product: "FreshWave Sardines", action: "Order Delivered", qtyChange: "-100", prevStock: 350, newStock: 250, reference: "ORD026" },
    { auditId: "AUD002", dateTime: "05/27/2026 09:30 AM", product: "Golden Harvest Beef", action: "Order Delivered", qtyChange: "-75", prevStock: 255, newStock: 180, reference: "ORD027" },
    { auditId: "AUD003", dateTime: "05/28/2026 10:20 AM", product: "Ocean Star Tuna", action: "Order Delivered", qtyChange: "-90", prevStock: 310, newStock: 220, reference: "ORD028" },
    { auditId: "AUD004", dateTime: "05/28/2026 11:00 AM", product: "Sunny Fruit Mix", action: "Order Delivered", qtyChange: "-50", prevStock: 140, newStock: 90, reference: "ORD029" },
    { auditId: "AUD005", dateTime: "05/29/2026 08:45 AM", product: "Farm Choice Beans", action: "Order Delivered", qtyChange: "-80", prevStock: 220, newStock: 140, reference: "ORD030" },
    { auditId: "AUD006", dateTime: "05/29/2026 10:10 AM", product: "UrbanFit T-Shirt", action: "Order Delivered", qtyChange: "-40", prevStock: 115, newStock: 75, reference: "ORD031" },
    { auditId: "AUD007", dateTime: "05/30/2026 09:40 AM", product: "BlueTrail Jeans", action: "Order Delivered", qtyChange: "-25", prevStock: 65, newStock: 40, reference: "ORD032" },
    { auditId: "AUD008", dateTime: "05/30/2026 01:15 PM", product: "ComfortWear Polo", action: "Order Delivered", qtyChange: "-35", prevStock: 85, newStock: 50, reference: "ORD033" },
    { auditId: "AUD009", dateTime: "05/31/2026 09:00 AM", product: "SilverEdge Spoon Set", action: "Order Delivered", qtyChange: "-30", prevStock: 90, newStock: 60, reference: "ORD034" },
    { auditId: "AUD010", dateTime: "05/31/2026 11:30 AM", product: "Crystal Plate Set", action: "Order Delivered", qtyChange: "-20", prevStock: 55, newStock: 35, reference: "ORD035" },
    { auditId: "AUD011", dateTime: "06/01/2026 08:50 AM", product: "PureGrain Rice Pack", action: "Order Delivered", qtyChange: "-60", prevStock: 180, newStock: 120, reference: "ORD036" },
    { auditId: "AUD012", dateTime: "06/01/2026 10:25 AM", product: "SweetBlend Sugar Pack", action: "Order Delivered", qtyChange: "-50", prevStock: 150, newStock: 100, reference: "ORD037" },
    { auditId: "AUD013", dateTime: "06/02/2026 09:35 AM", product: "HealthyHarvest Oats", action: "Order Delivered", qtyChange: "-35", prevStock: 105, newStock: 70, reference: "ORD038" },
    { auditId: "AUD014", dateTime: "06/01/2026 01:15 PM", product: "FreshWave Sardines", action: "Inventory Reserved", qtyChange: "-80", prevStock: 250, newStock: 170, reference: "ORD011" },
    { auditId: "AUD015", dateTime: "06/01/2026 01:40 PM", product: "Golden Harvest Beef", action: "Inventory Reserved", qtyChange: "-60", prevStock: 180, newStock: 120, reference: "ORD012" },
    { auditId: "AUD016", dateTime: "06/02/2026 02:10 PM", product: "Ocean Star Tuna", action: "Inventory Reserved", qtyChange: "-90", prevStock: 220, newStock: 130, reference: "ORD013" },
    { auditId: "AUD017", dateTime: "06/02/2026 02:45 PM", product: "Sunny Fruit Mix", action: "Inventory Reserved", qtyChange: "-40", prevStock: 90, newStock: 50, reference: "ORD014" },
    { auditId: "AUD018", dateTime: "06/03/2026 09:10 AM", product: "Farm Choice Beans", action: "Inventory Reserved", qtyChange: "-70", prevStock: 140, newStock: 70, reference: "ORD015" },
    { auditId: "AUD019", dateTime: "06/03/2026 10:30 AM", product: "UrbanFit T-Shirt", action: "Inventory Reserved", qtyChange: "-30", prevStock: 75, newStock: 45, reference: "ORD016" },
    { auditId: "AUD020", dateTime: "06/03/2026 11:15 AM", product: "BlueTrail Jeans", action: "Inventory Reserved", qtyChange: "-20", prevStock: 40, newStock: 20, reference: "ORD017" },
    { auditId: "AUD021", dateTime: "06/04/2026 09:00 AM", product: "NorthPeak Hoodie", action: "Inventory Reserved", qtyChange: "-15", prevStock: 25, newStock: 10, reference: "ORD018" },
    { auditId: "AUD022", dateTime: "06/04/2026 10:20 AM", product: "ComfortWear Polo", action: "Inventory Reserved", qtyChange: "-35", prevStock: 50, newStock: 15, reference: "ORD019" },
    { auditId: "AUD023", dateTime: "06/04/2026 11:30 AM", product: "SilverEdge Spoon Set", action: "Inventory Reserved", qtyChange: "-25", prevStock: 60, newStock: 35, reference: "ORD020" },
    { auditId: "AUD024", dateTime: "06/05/2026 08:45 AM", product: "Crystal Plate Set", action: "Inventory Reserved", qtyChange: "-30", prevStock: 35, newStock: 5, reference: "ORD021" },
    { auditId: "AUD025", dateTime: "06/05/2026 10:00 AM", product: "ChefMaster Cooking Pot", action: "Inventory Reserved", qtyChange: "-12", prevStock: 18, newStock: 6, reference: "ORD022" },
    { auditId: "AUD026", dateTime: "06/05/2026 11:20 AM", product: "PureGrain Rice Pack", action: "Inventory Reserved", qtyChange: "-50", prevStock: 120, newStock: 70, reference: "ORD023" },
    { auditId: "AUD027", dateTime: "06/06/2026 09:15 AM", product: "SweetBlend Sugar Pack", action: "Inventory Reserved", qtyChange: "-40", prevStock: 100, newStock: 60, reference: "ORD024" },
    { auditId: "AUD028", dateTime: "06/06/2026 10:40 AM", product: "MorningBrew Coffee Mix", action: "Inventory Reserved", qtyChange: "-25", prevStock: 110, newStock: 85, reference: "ORD025" },
    { auditId: "AUD029", dateTime: "06/06/2026 01:30 PM", product: "FreshLock Container Set", action: "Stock Adjustment", qtyChange: "+15", prevStock: 40, newStock: 55, reference: "ADJ001" },
    { auditId: "AUD030", dateTime: "06/06/2026 02:15 PM", product: "ClearView Measuring Cup", action: "Stock Adjustment", qtyChange: "+10", prevStock: 20, newStock: 30, reference: "ADJ002" }
];

// 2. Tie it to localStorage
let stockHistoryDatabase = JSON.parse(localStorage.getItem("globalStockHistory")) || initialStockHistoryMock;

// 3. Simple persistence utility helper
function saveStockHistoryToStorage() {
    localStorage.setItem("globalStockHistory", JSON.stringify(stockHistoryDatabase));
}

// 4. Run an initial write if storage is fresh
if (!localStorage.getItem("globalStockHistory")) {
    saveStockHistoryToStorage();
}

//======================================================================================================================================
//======================================================================================================================================
//======================================================================================================================================

// 1. Keep your group's exact admin data schema and credentials intact:
const defaultAdminProfile = {
    id: "ADM001",
    fullName: "Juan Dela Cruz",
    username: "admin",
    email: "admin@warehouse.com",
    contactNumber: "09123456789",
    role: "Warehouse Administrator",
    dateCreated: "01/01/2026",
    lastLogin: "06/06/2026 10:30 AM",
    password: "admin123" // Secured fallback parameter for login system matching
};

// 2. Safely wire into browser memory cache
let adminProfile = JSON.parse(localStorage.getItem("globalAdminProfile")) || defaultAdminProfile;
let isEditingProfile = false;

// 3. Storage sync engine utility
function saveProfileToStorage() {
    localStorage.setItem("globalAdminProfile", JSON.stringify(adminProfile));
}

// 4. Run an initial save block if local cache is currently empty
if (!localStorage.getItem("globalAdminProfile")) {
    saveProfileToStorage();
}

document.addEventListener("DOMContentLoaded", () => {
    // Find the main iframe inside dashboard.html (make sure its id matches 'main-display')
    const mainIframe = document.getElementById("main-display"); 
    if (mainIframe) {
        mainIframe.src = "overview.html"; // Instantly load the dynamic overview cards on launch!
    }
});

//======================================================================================================================================

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === adminProfile.username && password === adminProfile.password) {
        window.location.replace("dashboard.html");
        // Para di na sila makagamit back unless logout MWAHAHAHAHA >:3
    } else {
        alert("Invalid Username or Password!");
    }
}

function logout() {
    window.location.replace("login.html");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

//======================================================================================================================================

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
}

function toggleMenu(menuId) {
    let menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function deleteProduct(productId, returnPage) {
    const targetProduct = productsDatabase.find(p => p.id === productId);
    if (!targetProduct) {
        alert("Error: Target item could not be resolved.");
        return;
    }

    const confirmRemoval = confirm(`Are you sure you want to completely remove "${targetProduct.name}" (${targetProduct.id}) from the system?`);
    if (confirmRemoval) {
        productsDatabase = productsDatabase.filter(p => p.id !== productId);
        
        // 🌟 ADDED: Save the newly filtered array to localStorage!
        saveToStorage(); 
        
        // REPLACED: Call our new iframe rendering engines instead of showPage
        if (returnPage === 'productList') {
            renderProductList();
        } else if (returnPage === 'categories') {
            renderCategories();
        } else if (returnPage === 'currentStock') {
            // 🌟 ADDED: If they delete from the Current Stock/Stock In view, handle it here!
            if (typeof renderCurrentStock === "function") {
                renderCurrentStock();
            } else {
                // If you chose Option 1 (reusing the product-list file), fallback directly to product list render
                renderProductList(); 
            }
        } else {
            // Fallback just in case you haven't migrated other pages yet
            if (typeof showPage === "function") showPage(returnPage);
        }
    }
}

function dispatchOrder(orderId) {
    const matchedorder = ordersDatabase.find(o => o.id === orderId);
    if (!matchedorder) return;

    // ... whatever verification steps or status updates they had, keep them!
    matchedorder.status = "In Transit"; // For example, updating the state

    // 🌟 SAVE THE PROGRESS: Commit the state modification to localStorage!
    saveOrdersToStorage();

    alert(`Order ${orderId} has been successfully dispatched for transport.`);

    // Refresh our new iframe view instantly
    renderPendingOrders();
}

function completeOrderDelivery(orderId) {
    const matchedOrder = ordersDatabase.find(o => o.id === orderId);
    if (matchedOrder) {
        matchedOrder.status = "Delivered";
        
        const today = new Date();
        const formattedDate = String(today.getMonth() + 1).padStart(2, '0') + '/' + 
                              String(today.getDate()).padStart(2, '0') + '/' + 
                              today.getFullYear();
        matchedOrder.deliveryDate = formattedDate;

        stockOutDatabase.push({
            id: `SO${String(stockOutDatabase.length + 1).padStart(3, '0')}`,
            orderId: matchedOrder.id,
            prodName: matchedOrder.productName,
            qty: matchedOrder.qty,
            delDate: formattedDate,
            reason: "Real-time Dashboard Delivery Fulfill"
        });

        deliveryHistoryDatabase.push({
            id: `DH${String(deliveryHistoryDatabase.length + 1).padStart(3, '0')}`,
            orderId: matchedOrder.id,
            prodName: matchedOrder.productName,
            qty: matchedOrder.qty,
            orderDate: matchedOrder.orderDate,
            delDate: formattedDate,
            status: "Delivered",
            remarks: "Completed"
        });

        // 🌟 SAVE ALL THE CHAINS: Commit all updated arrays to browser memory!
        saveOrdersToStorage();         // Saves the "Delivered" status change
        saveStockOutToStorage();        // Saves the new Stock Out log entry
        saveDeliveryHistoryToStorage();  // Saves the new Delivery History record

        alert(`Fulfillment Complete: Order "${orderId}" successfully logged as Delivered.`);
        
        // REPLACED: Instantly re-render the in-transit view inside the iframe
        renderInTransitOrders();
    }
}

function handleAddProductSubmit(event) {
    event.preventDefault();

    const idInput = document.getElementById("formProdId").value.trim();
    const nameInput = document.getElementById("formProdName").value.trim();
    const catInput = document.getElementById("formProdCategory").value;
    const qtyInput = document.getElementById("formProdQty").value.trim();
    const priceInput = document.getElementById("formProdPrice").value.trim();

    if (!idInput || !nameInput || !catInput || !qtyInput || !priceInput) {
        alert("Operation Error: All fields are required. Please populate missing entries.");
        return;
    }

    const idExists = productsDatabase.some(product => product.id.toLowerCase() === idInput.toLowerCase());
    if (idExists) {
        alert(`Operation Error: Product ID "${idInput}" already exists in records. Please allocate a unique identifier key.`);
        return;
    }

    const parsedQty = parseInt(qtyInput, 10);
    const parsedPrice = parseFloat(priceInput);

    if (isNaN(parsedQty) || parsedQty < 0) {
        alert("Input Error: Quantity must evaluate to a valid positive whole integer or zero.");
        return;
    }
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
        alert("Input Error: Unit Price must evaluate to a valid positive number greater than 0.");
        return;
    }

    const productPayload = {
        id: idInput,
        name: nameInput,
        category: catInput,
        quantity: parsedQty,
        price: parsedPrice
    };

    // ... all their validation logic remains exactly the same ...

    productsDatabase.push(productPayload);
    saveToStorage();
    alert(`Success: "${nameInput}" was successfully registered into inventory database.`);
    
    // REPLACED: Redirect the iframe to load the standalone product list page
    window.location.href = "product-list.html";
}

// PROFILE AND PASSWORD PROCESSING MODULE LOGIC
function setProfileEditMode(mode) {
    isEditingProfile = mode;
    showPage('profile');
}

function saveProfileChanges() {
    const editName = document.getElementById("editProfileName").value.trim();
    const editUsername = document.getElementById("editProfileUsername").value.trim();
    const editEmail = document.getElementById("editProfileEmail").value.trim();
    const editContact = document.getElementById("editProfileContact").value.trim();

    if (!editName || !editUsername || !editEmail || !editContact) {
        alert("Validation Failure: Dynamic profile parameters cannot be saved with empty strings.");
        return;
    }

    adminProfile.fullName = editName;
    adminProfile.username = editUsername;
    adminProfile.email = editEmail;
    adminProfile.contactNumber = editContact;

    alert("Success: Admin profile information records updated locally.");
    setProfileEditMode(false);
}

function updateSystemPassword(event) {
    event.preventDefault();

    const currentPass = document.getElementById("pwdCurrent").value;
    const newPass = document.getElementById("pwdNew").value;
    const confirmPass = document.getElementById("pwdConfirm").value;

    if (currentPass !== adminProfile.password) {
        alert("Security Error: Current password entry does not match active system credentials.");
        return;
    }

    if (newPass.length < 8) {
        alert("Security Specification Failure: The new system access key must contain at least 8 characters.");
        return;
    }

    if (newPass !== confirmPass) {
        alert("Validation Match Error: Confirm New Password string field must match the proposed New Password parameters.");
        return;
    }

    adminProfile.password = newPass;
    alert("Success: Security authentication token credential rotation processed successfully.");
    clearPasswordForm();
}

function clearPasswordForm() {
    if (document.getElementById("passwordForm")) {
        document.getElementById("passwordForm").reset();
    }
}

//======================================================================================================================================
//======================================================================================================================================
//======================================================================================================================================

// Extract this out so the iframe can call it directly!
function renderProductList() {
    // 1. Try to find the table body inside the iframe page
    const tableBody = document.getElementById("productTableBody");
    if (!tableBody) return; // Exit if we aren't on the productList page

    let tableRows = "";
    
    // The exact same loop they wrote!
    productsDatabase.forEach(p => {
        tableRows += `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td style="font-weight: bold; color: ${p.quantity < 50 ? '#ef4444' : 'black'}">${p.quantity}</td>
            <td>₱${p.price.toFixed(2)}</td>
            <td style="text-align: center;">
                <button onclick="deleteProduct('${p.id}', 'productList')" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px;">
                    🗑️ Delete
                </button>
            </td>
        </tr>`;
    });

    // 2. Inject the rows into our new target ID
    tableBody.innerHTML = tableRows.length > 0 ? tableRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding: 20px;">No inventory stock elements registered inside global matrix storage.</td></tr>';
}

function renderCategories() {
    // 1. Try to find the target container inside your new categories.html page
    const container = document.getElementById("categoriesContainer");
    if (!container) return; // Safeguard if we aren't currently viewing categories

    const categoriesList = ["Canned Goods", "Clothing", "Kitchen Goods", "Non-Perishable Items"];
    let categoriesHTML = `<h2>Product Categories</h2><p style="margin-bottom: 25px;">Browse inventory products grouped by operational category segments.</p>`;

    categoriesList.forEach(catName => {
        const filteredProducts = productsDatabase.filter(p => p.category === catName);
        let catRows = "";
        let catTotalValue = 0;

        filteredProducts.forEach(p => {
            catTotalValue += (p.quantity * p.price);
            catRows += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td style="font-weight: bold; color: ${p.quantity < 50 ? '#ef4444' : 'black'}">${p.quantity}</td>
                <td>₱${p.price.toFixed(2)}</td>
                <td style="text-align: center;">
                    <button onclick="deleteProduct('${p.id}', 'categories')" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 11px;">
                        🗑️ Delete
                    </button>
                </td>
            </tr>`;
        });

        categoriesHTML += `
        <div style="margin-bottom: 35px; background: #fdfdfd; padding: 15px; border-radius: 8px; border-left: 5px solid #2563eb; box-shadow: 0 1px 4px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="color: #1f2937;">📂 ${catName} (${filteredProducts.length} Items)</h3>
                <span style="font-size: 14px; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 12px; font-weight: bold;">Valuation: ₱${catTotalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style="background: #4b5563;">Product ID</th>
                        <th style="background: #4b5563;">Product Name</th>
                        <th style="background: #4b5563;">Quantity</th>
                        <th style="background: #4b5563;">Unit Price</th>
                        <th style="background: #4b5563; width: 90px; text-align: center;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${catRows.length > 0 ? catRows : '<tr><td colspan="5" style="text-align:center; color:#999; padding:15px;">No products found in this category.</td></tr>'}
                </tbody>
            </table>
        </div>`;
    });

    // 2. Inject everything directly into the categories file container
    container.innerHTML = categoriesHTML;
}

function renderLowStock() {
    const tableBody = document.getElementById("lowStockTableBody");
    if (!tableBody) return;

    let lowStockRows = "";
    
    // Filter down to the low stock entries automatically
    productsDatabase.filter(p => p.quantity < 50).forEach(p => {
        lowStockRows += `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td style="font-weight: bold; color: #ef4444;">${p.quantity}</td>
            <td>₱${p.price.toFixed(2)}</td>
        </tr>`;
    });

    tableBody.innerHTML = lowStockRows.length > 0 ? lowStockRows : '<tr><td colspan="5" style="text-align:center; color:#10b981; padding: 20px; font-weight: bold;">Excellent: No products are currently running low on stock boundaries.</td></tr>';
}

function renderPendingOrders() {
    const tableBody = document.getElementById("pendingOrdersTableBody");
    if (!tableBody) return; // Guard clause if we aren't viewing this specific page

    let pendingRows = "";
    
    // Filter down to show only 'Pending' item elements
    ordersDatabase.filter(o => o.status === "Pending").forEach(o => {
        pendingRows += `
        <tr>
            <td>${o.id}</td>
            <td>${o.productName}</td>
            <td>${o.qty}</td>
            <td>${o.orderDate}</td>
            <td>${o.deliveryDate}</td>
            <td><span style="background: #fef3c7; color: #d97706; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${o.status}</span></td>
            <td style="text-align: center;">
                <button onclick="dispatchOrder('${o.id}')" style="background: #10b981; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 11px;">
                    🚚 Ship Order
                </button>
            </td>
        </tr>`;
    });

    tableBody.innerHTML = pendingRows.length > 0 ? pendingRows : '<tr><td colspan="7" style="text-align:center; color:#999; padding: 20px;">No pending processing sequences inside queues.</td></tr>';
}

function renderInTransitOrders() {
    const tableBody = document.getElementById("inTransitTableBody");
    if (!tableBody) return; // Safeguard if we aren't viewing this specific page

    let transitRows = "";
    
    // Filter down to display only 'In Transit' items
    ordersDatabase.filter(o => o.status === "In Transit").forEach(o => {
        transitRows += `
        <tr>
            <td>${o.id}</td>
            <td>${o.productName}</td>
            <td>${o.qty}</td>
            <td>${o.orderDate}</td>
            <td>${o.deliveryDate}</td>
            <td><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${o.status}</span></td>
            <td style="text-align: center;">
                <button onclick="completeOrderDelivery('${o.id}')" style="background: #2563eb; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 11px;">
                    ✅ Mark Delivered
                </button>
            </td>
        </tr>`;
    });

    tableBody.innerHTML = transitRows.length > 0 ? transitRows : '<tr><td colspan="7" style="text-align:center; color:#999; padding: 20px;">No freight shipments currently moving through en route channels.</td></tr>';
}

function renderDeliveredOrders() {
    const tableBody = document.getElementById("deliveredTableBody");
    if (!tableBody) return; // Safeguard if we aren't viewing this specific page

    let deliveredRows = "";
    
    // Filter down to display only 'Delivered' items
    ordersDatabase.filter(o => o.status === "Delivered").forEach(o => {
        deliveredRows += `
        <tr>
            <td>${o.id}</td>
            <td>${o.productName}</td>
            <td>${o.qty}</td>
            <td>${o.orderDate}</td>
            <td>${o.deliveryDate}</td>
            <td><span style="background: #dcfce7; color: #15803d; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${o.status}</span></td>
        </tr>`;
    });

    tableBody.innerHTML = deliveredRows.length > 0 ? deliveredRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding: 20px;">No archived historical drop sheets logged yet.</td></tr>';
}

function renderCurrentStock() {
    const tableBody = document.getElementById("currentStockTableBody");
    if (!tableBody) return;

    let tableRows = "";
    productsDatabase.forEach(p => {
        tableRows += `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td style="font-weight: bold; color: ${p.quantity < 50 ? '#ef4444' : 'black'}">${p.quantity}</td>
            <td>₱${p.price.toFixed(2)}</td>
            <td style="text-align: center;">
                <button onclick="deleteProduct('${p.id}', 'currentStock')" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px;">
                    🗑️ Delete
                </button>
            </td>
        </tr>`;
    });

    tableBody.innerHTML = tableRows.length > 0 ? tableRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding: 20px;">No inventory stock elements registered inside global matrix storage.</td></tr>';
}

function renderStockHistory() {
    const tableBody = document.getElementById("stockHistoryTableBody");
    if (!tableBody) return; // Safeguard block if user is on a different submenu sheet

    let shRows = "";
    
    stockHistoryDatabase.forEach(sh => {
        let badgeStyle = "background:#cbd5e1; color:#334155;";
        if (sh.action === "Order Delivered") {
            badgeStyle = "background:#dcfce7; color:#15803d;";
        } else if (sh.action === "Inventory Reserved") {
            badgeStyle = "background:#fef3c7; color:#d97706;";
        } else if (sh.action === "Stock Adjustment") {
            badgeStyle = "background:#e0f2fe; color:#0369a1;";
        }

        // Dynamically compute green color for items added (+) or red for item stock drop (-)
        const changeColor = sh.qtyChange.startsWith("+") ? "#10b981" : "#ef4444";

        shRows += `
        <tr>
            <td><strong>${sh.auditId}</strong></td>
            <td style="white-space:nowrap; font-size:13px; color:#4b5563;">${sh.dateTime}</td>
            <td>${sh.product}</td>
            <td><span style="padding:3px 8px; border-radius:4px; font-weight:bold; font-size:11px; ${badgeStyle}">${sh.action}</span></td>
            <td style="font-weight:bold; color:${changeColor};">${sh.qtyChange}</td>
            <td>${sh.prevStock}</td>
            <td style="font-weight:600;">${sh.newStock}</td>
            <td><span style="font-family:monospace; background:#f3f4f6; padding:2px 6px; border-radius:4px; font-size:12px; color:#374151;">${sh.reference}</span></td>
        </tr>`;
    });

    tableBody.innerHTML = shRows.length > 0 ? shRows : '<tr><td colspan="8" style="text-align:center; color:#999; padding:20px;">No historical system variations found inside active logging indices.</td></tr>';
}

function renderStockInRecords() {
    const tableBody = document.getElementById("stockInTableBody");
    if (!tableBody) return; // Safeguard guard clause if viewing a different page frame

    let stockInRows = "";
    
    stockInDatabase.forEach(si => {
        stockInRows += `
        <tr>
            <td>${si.id}</td>
            <td>${si.date}</td>
            <td>${si.prodId}</td>
            <td>${si.prodName}</td>
            <td style="font-weight:bold; color:#10b981;">+${si.qty}</td>
            <td>${si.supplier}</td>
        </tr>`;
    });

    tableBody.innerHTML = stockInRows.length > 0 ? stockInRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding:20px;">No historical replenishment logs registered inside active registers.</td></tr>';
}

function renderStockOutRecords() {
    const tableBody = document.getElementById("stockOutTableBody");
    if (!tableBody) return; // Safeguard guard clause if viewing a different iframe view

    let stockOutRows = "";
    
    stockOutDatabase.forEach(so => {
        stockOutRows += `
        <tr>
            <td>${so.id}</td>
            <td>${so.orderId}</td>
            <td>${so.prodName}</td>
            <td style="font-weight:bold; color:#f97316;">-${so.qty}</td>
            <td>${so.delDate}</td>
            <td><em style="color:#4b5563;">${so.reason}</em></td>
        </tr>`;
    });

    tableBody.innerHTML = stockOutRows.length > 0 ? stockOutRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding:20px;">No verified outbound logs registered inside active registers.</td></tr>';
}

function renderTransactionRecords() {
    const tableBody = document.getElementById("transactionRecordsTableBody");
    if (!tableBody) return; // Safeguard guard clause if viewing a different iframe view

    let txRows = "";
    
    transactionDatabase.forEach(tx => {
        const badgeColor = tx.effect === "Increase" ? "background:#dcfce7; color:#15803d;" : "background:#ffedd5; color:#ea580c;";
        
        txRows += `
        <tr>
            <td><strong>${tx.id}</strong></td>
            <td><span style="padding:2px 6px; border-radius:4px; font-weight:bold; font-size:11px; ${badgeColor}">${tx.type}</span></td>
            <td>${tx.ref}</td>
            <td>${tx.prodId}</td>
            <td style="font-weight:bold; color:${tx.effect === "Increase" ? "#15803d" : "#b45309"}">${tx.qty}</td>
            <td><span style="font-weight:600; color:${tx.effect === "Increase" ? "#10b981" : "#ef4444"}">${tx.effect}</span></td>
        </tr>`;
    });

    tableBody.innerHTML = txRows.length > 0 ? txRows : '<tr><td colspan="6" style="text-align:center; color:#999; padding:20px;">No master transactions registered inside system history log files.</td></tr>';
}

function renderDeliveryTracking() {
    const container = document.getElementById("deliveryTrackingContainer");
    if (!container) return; // Safeguard guard clause block if viewing a different page frame

    let trackingSectionsHTML = `
    <h2>Live Delivery Tracking Hub</h2>
    <p style="margin-bottom: 25px;">Real-time checkpoint monitoring for freight packages currently in transit routes.</p>`;

    let hasRecords = false;

    for (let orderId in deliveryTrackingLogs) {
        hasRecords = true;
        const logs = deliveryTrackingLogs[orderId];
        const activeOrder = ordersDatabase.find(o => o.id === orderId);
        const itemName = activeOrder ? activeOrder.productName : "Unknown Item";
        const volume = activeOrder ? activeOrder.qty : 0;

        let timelineEventsHTML = "";
        logs.forEach((log, index) => {
            const isLatest = (index === logs.length - 1);
            const pointStyle = isLatest 
                ? "background:#2563eb; transform:scale(1.2); box-shadow:0 0 8px rgba(37,99,235,0.6);" 
                : "background:#cbd5e1;";
            
            timelineEventsHTML += `
            <div style="display:flex; margin-bottom:12px; position:relative; align-items:flex-start;">
                <div style="width:160px; font-size:12px; color:#6b7280; font-weight:600; padding-top:2px;">
                    🕒 ${log.time}
                </div>
                <div style="width:12px; height:12px; border-radius:50%; ${pointStyle} margin:6px 15px 0 15px; flex-shrink:0; z-index:2;"></div>
                <div style="font-size:13px; color:${isLatest ? '#1e3a8a' : '#374151'}; font-weight:${isLatest ? 'bold' : 'normal'}; background:${isLatest ? '#eff6ff' : 'transparent'}; padding:${isLatest ? '4px 8px' : '0'}; border-radius:4px;">
                    ${log.status}
                </div>
            </div>`;
        });

        trackingSectionsHTML += `
        <div style="background:#ffffff; padding:18px; border-radius:8px; margin-bottom:25px; border:1px solid #e5e7eb; box-shadow:0 2px 5px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f3f4f6; padding-bottom:10px; margin-bottom:15px;">
                <div>
                    <span style="font-size:15px; font-weight:bold; color:#1f2937; background:#f3f4f6; padding:4px 10px; border-radius:6px; margin-right:10px;">📦 ${orderId}</span>
                    <strong style="color:#4b5563;">${itemName}</strong>
                </div>
                <span style="font-size:12px; background:#e0f2fe; color:#0369a1; padding:4px 10px; border-radius:20px; font-weight:bold;">Volume: ${volume} units</span>
            </div>
            <div style="position:relative; padding-left:5px;">
                <div style="position:absolute; left:180px; top:10px; bottom:15px; width:2px; background:#e5e7eb; z-index:1;"></div>
                ${timelineEventsHTML}
            </div>
        </div>`;
    }

    // Fallback block display message if tracking queue is completely empty
    if (!hasRecords) {
        trackingSectionsHTML += `<div style="text-align:center; color:#999; padding: 40px; background:#fff; border-radius:8px; border:1px dashed #cbd5e1;">No packages currently mapped to tracking routes.</div>`;
    }

    container.innerHTML = trackingSectionsHTML;
}

function renderDeliveryHistory() {
    const tableBody = document.getElementById("deliveryHistoryTableBody");
    if (!tableBody) return; // Safeguard guard clause if viewing a different iframe view

    let dhRows = "";
    
    deliveryHistoryDatabase.forEach(dh => {
        dhRows += `
        <tr>
            <td><strong>${dh.id}</strong></td>
            <td>${dh.orderId}</td>
            <td>${dh.prodName}</td>
            <td style="font-weight:bold;">${dh.qty}</td>
            <td>${dh.orderDate}</td>
            <td>${dh.delDate}</td>
            <td><span style="background:#dcfce7; color:#15803d; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:11px;">${dh.status}</span></td>
            <td><span style="color:#2563eb; font-weight:600;">⚙️ ${dh.remarks}</span></td>
        </tr>`;
    });

    tableBody.innerHTML = dhRows.length > 0 ? dhRows : '<tr><td colspan="8" style="text-align:center; color:#999; padding:20px;">No historical distribution milestones logged inside archive registries.</td></tr>';
}

// 1. Main Data Rendering Engine Block
function renderProfile() {
    const container = document.getElementById("profileViewContainer");
    if (!container) return; // Safeguard clause block if viewing a different page frame

    if (isEditingProfile) {
        container.innerHTML = `
        <h2>Edit Admin Profile</h2>
        <p style="margin-bottom: 20px;">Modify active system identity information parameters below.</p>
        <div style="max-width: 500px; background: #f9fafb; padding: 25px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">Admin ID:</label>
                <input type="text" value="${adminProfile.id}" disabled style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; background:#f3f4f6; color:#94a3b8; cursor:not-allowed;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">Full Name:</label>
                <input type="text" id="editProfileName" value="${adminProfile.fullName}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">Username:</label>
                <input type="text" id="editProfileUsername" value="${adminProfile.username}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">Email Address:</label>
                <input type="email" id="editProfileEmail" value="${adminProfile.email}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">Contact Number:</label>
                <input type="text" id="editProfileContact" value="${adminProfile.contactNumber}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; font-weight:bold; margin-bottom:5px; color:#4b5563;">System Role:</label>
                <input type="text" value="${adminProfile.role}" disabled style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; background:#f3f4f6; color:#94a3b8; cursor:not-allowed;">
            </div>
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button onclick="saveProfileChanges()" style="flex:1; background:#10b981; color:white; border:none; padding:10px; font-weight:bold; border-radius:4px; cursor:pointer;">💾 Save Changes</button>
                <button onclick="setProfileEditMode(false)" style="flex:1; background:#6b7280; color:white; border:none; padding:10px; font-weight:bold; border-radius:4px; cursor:pointer;">Cancel</button>
            </div>
        </div>`;
    } else {
        container.innerHTML = `
        <h2>Admin Profile Page</h2>
        <p style="margin-bottom: 20px;">Current verified identity account access parameters.</p>
        <div style="max-width: 500px; background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563; width:40%;">Admin ID:</td><td style="padding:10px 0; color:#111827;">${adminProfile.id}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Full Name:</td><td style="padding:10px 0; color:#111827;">${adminProfile.fullName}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Username:</td><td style="padding:10px 0; color:#111827;">${adminProfile.username}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Email Address:</td><td style="padding:10px 0; color:#111827;">${adminProfile.email}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Contact Number:</td><td style="padding:10px 0; color:#111827;">${adminProfile.contactNumber}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">System Role:</td><td style="padding:10px 0; color:#2563eb; font-weight:600;">${adminProfile.role}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Date Created:</td><td style="padding:10px 0; color:#111827;">${adminProfile.dateCreated}</td></tr>
                <tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0; font-weight:bold; color:#4b5563;">Last Login Timestamp:</td><td style="padding:10px 0; color:#111827;">${adminProfile.lastLogin}</td></tr>
            </table>
            <button onclick="setProfileEditMode(true)" style="background:#2563eb; color:white; border:none; padding:10px 20px; font-weight:bold; border-radius:4px; cursor:pointer; width:100%;">✏️ Edit Profile</button>
        </div>`;
    }
}

// 2. Action Callback to Toggle Edit State Mode
function setProfileEditMode(booleanValue) {
    isEditingProfile = booleanValue;
    renderProfile(); // Instantly update view container interior structure
}

// 3. Action Callback to Save Profile Modification Changes
function saveProfileChanges() {
    const nameInput = document.getElementById("editProfileName");
    const usernameInput = document.getElementById("editProfileUsername");
    const emailInput = document.getElementById("editProfileEmail");
    const contactInput = document.getElementById("editProfileContact");

    if (nameInput && usernameInput && emailInput && contactInput) {
        // Form field validations fallback safety check
        if (!nameInput.value.trim() || !usernameInput.value.trim()) {
            alert("Error: Full Name and Username fields cannot be blank.");
            return;
        }

        // Apply input data mutations to memory data object array properties
        adminProfile.fullName = nameInput.value.trim();
        adminProfile.username = usernameInput.value.trim();
        adminProfile.email = emailInput.value.trim();
        adminProfile.contactNumber = contactInput.value.trim();

        // 🌟 SAVE TO LOCALSTORAGE: Commit changes persistently
        saveProfileToStorage();

        alert("System Notice: Admin identity data records saved successfully.");
        
        // Turn edit mode off and re-render the pristine presentation data block view
        isEditingProfile = false;
        renderProfile();
    }
}

// 1. Validate Form Input Data and Update Admin Password
function updateSystemPassword(event) {
    event.preventDefault(); // Keep page from breaking iframe context on submit

    const currentInput = document.getElementById("pwdCurrent");
    const newInput = document.getElementById("pwdNew");
    const confirmInput = document.getElementById("pwdConfirm");

    if (!currentInput || !newInput || !confirmInput) return;

    // Validation Check A: Verify match against current storage string
    if (currentInput.value !== adminProfile.password) {
        alert("Security Error: The current password you entered is incorrect.");
        return;
    }

    // Validation Check B: Length requirement parameters check
    if (newInput.value.length < 8) {
        alert("Form Error: New password must be at least 8 characters long.");
        return;
    }

    // Validation Check C: Verify identity matching on both entry blocks
    if (newInput.value !== confirmInput.value) {
        alert("Form Error: New password confirmation entries do not match.");
        return;
    }

    // Process Mutation: Overwrite string property on the state cache object
    adminProfile.password = newInput.value;
    
    // Commit to LocalStorage via the helper function we set up earlier
    if (typeof saveProfileToStorage === "function") {
        saveProfileToStorage();
    } else {
        localStorage.setItem("globalAdminProfile", JSON.stringify(adminProfile));
    }

    alert("Security Notice: Admin password has been rotated and saved successfully.");
    clearPasswordForm();
}

// 2. Clear Form Submission Fields Helper Block
function clearPasswordForm() {
    const form = document.getElementById("passwordForm");
    if (form) {
        form.reset();
    }
}

function renderDashboardOverview() {
    const container = document.getElementById("dashboardOverviewContainer");
    if (!container) return; // Safeguard guard clause block if viewing a different page frame

    // 📊 DYNAMIC CALCULATIONS: Pull metrics in real-time from active system storage layers
    const productsList = JSON.parse(localStorage.getItem("globalProducts")) || [];
    const ordersList = JSON.parse(localStorage.getItem("globalOrders")) || [];

    // 1. Calculate Total Registered Products
    const totalProducts = productsList.length;

    // 2. Calculate Aggregate Total Orders Count
    const aggregateOrdersCount = ordersList.length;

    // 3. Calculate Low Stock Items (Example boundary parameter: Stock count is 10 or below)
    const lowStockCount = productsList.filter(p => Number(p.stock) <= 10).length;

    // 4. Calculate Pending Deliveries (Count order entries whose active status is not 'Delivered')
    const pendingDeliveriesCount = ordersList.filter(o => o.status !== "Delivered").length;

    // Inject the structured responsive CSS grid with live state bindings
    container.innerHTML = `
    <h2>Dashboard</h2>
    <p style="margin-bottom: 20px;">Welcome to your Inventory Overview.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div style="background: #2563eb; color: white; padding: 20px; border-radius: 8px;">
            <h3>Total Products</h3>
            <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${totalProducts}</p>
        </div>
        <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px;">
            <h3>Total Orders</h3>
            <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${aggregateOrdersCount}</p>
        </div>
        <div style="background: #ef4444; color: white; padding: 20px; border-radius: 8px;">
            <h3>Low Stock Items</h3>
            <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${lowStockCount}</p>
        </div>
        <div style="background: #f59e0b; color: white; padding: 20px; border-radius: 8px;">
            <h3>Pending Deliveries</h3>
            <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${pendingDeliveriesCount}</p>
        </div>
    </div>`;
}

//======================================================================================================================================
//======================================================================================================================================
//======================================================================================================================================

function showPage(page) {
    let content = document.getElementById("pageContent");

    const totalProducts = productsDatabase.length;
    const lowStockCount = productsDatabase.filter(p => p.quantity < 50).length;
    const aggregateOrdersCount = ordersDatabase.length;
    const pendingDeliveriesCount = ordersDatabase.filter(o => o.status === "Pending" || o.status === "In Transit").length;

    switch(page) {
        case "dashboard":
            content.innerHTML = `
            <h2>Dashboard</h2>
            <p style="margin-bottom: 20px;">Welcome to your Inventory Overview.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="background: #2563eb; color: white; padding: 20px; border-radius: 8px;">
                    <h3>Total Products</h3>
                    <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${totalProducts}</p>
                </div>
                <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px;">
                    <h3>Total Orders</h3>
                    <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${aggregateOrdersCount}</p>
                </div>
                <div style="background: #ef4444; color: white; padding: 20px; border-radius: 8px;">
                    <h3>Low Stock Items</h3>
                    <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${lowStockCount}</p>
                </div>
                <div style="background: #f59e0b; color: white; padding: 20px; border-radius: 8px;">
                    <h3>Pending Deliveries</h3>
                    <p style="font-size: 24px; font-weight: bold; margin-top: 10px;">${pendingDeliveriesCount}</p>
                </div>
            </div>`;
            break;
    }
}