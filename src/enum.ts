// ------------------------------------ Enum Type in Typescript Exercise ----------------------------
// First: Numeric enum

enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
};

function getOrderStatus(status: OrderStatus): string {
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
};

// Example of usage with canceled and shipped status
console.log("--- Processing Order Status ---");

const order1Status: OrderStatus = OrderStatus.Cancelled;
const order1Description: string = getOrderStatus(order1Status);
console.log(order1Description); // Output: Your order has been cancelled.

const order2Status: OrderStatus = OrderStatus.Shipped;
const order2Description: string = getOrderStatus(order1Status);
console.log(order1Description); // Output: Your order has been shipped.

// ---------------------------------------------------------------------------------------------
// Second: String enum
// HttpMethod` with values: `GET = "GET"`, `POST = "POST"`, `PUT = "PUT"`, `DELETE = "DELETE"`.

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

function getHttpMethod(process: HttpMethod) {
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
};

// Example Usage:

console.log("--- Processing HTTP Requests ---");

// Process a GET request
getHttpMethod(HttpMethod.GET); // Output: Processing HTTP GET request.

// Process a POST request
getHttpMethod(HttpMethod.POST); // Output: Processing HTTP POST request.
