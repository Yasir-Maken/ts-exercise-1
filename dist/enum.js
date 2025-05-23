"use strict";
// ------------------------------------ Enum Type in Typescript Exercise ----------------------------
// First: Numeric enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
;
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is currently Pending.";
        case OrderStatus.Shipped:
            return "Your order has been shipped.";
        case OrderStatus.Delivered:
            return "Your order has been delivered.";
        case OrderStatus.Cancelled:
            return "Your order has been cancelled.";
        default:
            // This should ideally be unreachable if the enum is exhaustive
            return "Unknown order status.";
    }
}
;
// Example of usage with canceled and shipped status
console.log("--- Processing Order Status ---");
const order1Status = OrderStatus.Cancelled;
const order1Description = getOrderStatus(order1Status);
console.log(order1Description); // Output: Your order has been cancelled.
const order2Status = OrderStatus.Shipped;
const order2Description = getOrderStatus(order1Status);
console.log(order1Description); // Output: Your order has been shipped.
// ---------------------------------------------------------------------------------------------
// Second: String enum
// HttpMethod` with values: `GET = "GET"`, `POST = "POST"`, `PUT = "PUT"`, `DELETE = "DELETE"`.
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
;
function getHttpMethod(process) {
    switch (process) {
        case HttpMethod.GET:
            console.log(`Processing HTTP ${process} request.`);
            break;
        case HttpMethod.POST:
            console.log(`Processing HTTP ${process} request.`);
            break;
        case HttpMethod.PUT:
            console.log(`Processing HTTP ${process} request.`);
            break;
        case HttpMethod.DELETE:
            console.log(`Processing HTTP ${process} request.`);
            break;
        default:
            // This case should ideally not be reached if all enum values are handled.
            console.log(`Unknown HTTP method: ${process}.`);
    }
}
;
// Example Usage:
console.log("--- Processing HTTP Requests ---");
// Process a GET request
getHttpMethod(HttpMethod.GET); // Output: Processing HTTP GET request.
// Process a POST request
getHttpMethod(HttpMethod.POST); // Output: Processing HTTP POST request.
