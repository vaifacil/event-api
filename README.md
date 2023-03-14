# Event Service

Service aimed at creating order events, relating phisical packages and drivers in a historical and immutable interaction

### **Create Event**

#### `Request`

```json
{
    "method": "POST",
    "path": "/event",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "driverId": "1",
        "orderId": "1",
        "type": "delivery"
    }
}
```

#### `Response`

```
201 created - No Body
```

### **Get Event**

#### `Request`

```json
{
    "method": "GET",
    "path": "/event/:id",
    "headers": {
        "Content-Type": "application/json"
    }
}
```

#### `Response`

```json
{
    "id": "0c77821d-59a3-4f7d-a277-8f33b18db9a9",
    "driverId": "1",
    "orderId": "1",
    "type": "delivery",
    "date": "2023-01-31T00:00:00.000Z"
}
```

### **List Driver Events**

#### `Request`

_Attention: requests must follow this specific date format_

```json
{
    "method": "GET",
    "path": "/event/driver/:id",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "from": "01-01-2023",
        "to": "31-01-2023"
    }
}
```

#### `Response`

```json
[
    {
        "id": "0c77821d-59a3-4f7d-a277-8f33b18db6b2",
        "driverId": "1",
        "orderId": "1",
        "type": "delivery",
        "date": "2023-01-05T15:22:31.000Z"
    },
    {
        "id": "0c77821d-59a3-4f7d-a277-8f33b18db9a9",
        "driverId": "1",
        "orderId": "1",
        "type": "delivery",
        "date": "2023-01-31T00:00:00.000Z"
    }
]
```
