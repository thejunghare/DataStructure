# Queue

Defined as ordered list, helps **insert** operations to be performed at one end called **rear** and **delete** for one end called **front**

## Types

```mermaid
graph TD
    A[Queue] --> B(Simple/Linear Queue)
    A[Queue] --> c(Circular Queue)
    A[Queue] --> d(Priority Queue)
    A[Queue] --> E(Double Ended/Dequeue Queue)
```

## Simple Queue

Follows FIFO.

## Circular Queue

A circular queue is similar to the linear queue expect the last element of queue is connected to first element. It's aslo called as the ring buffer.

The representation of circular queue is shown in the below image -

```mermaid
graph LR
    Node1 --> Node2 --> Node3
    Node3 --> Node1
```

## Priority Queue

A queue which is arranged on the basis of the priority.Special type of queue where elements are arranged on priority associated with it.Elements with same amount of priority will be arranged on FIFO base's.

```mermaid
graph LR
    A[80] --> B[30] --> C[20] --> D[10] --> E[5]
    A[80] --> G(Dequeue)
    A[80] --> H(Highest Priority)
    I(Enqueue) --> E[5]
    E[5] --> J(Lowest Priority)

    A[80] -- Decreasing Priority  --> E(5)
```

- Types of Priority queue

```mermaid
graph LR
    A[Priority Queue] --> B(Ascending Priority Queue)
    A[Priority Queue] --> c(Descending Priority Queue)
```

## Double ended queue OR Dequeue

Insertion and deletion can be done from both ends of queue either from front or rear. Can be used as an palindrome checker (if we can read string from both ends, then the string would be same).

Dequeue can be used both as stack and queue as they both follow LIFO
Dequeue doesn't follow FIFO

```mermaid
graph TD

subgraph Double Ended Queue
    A[Node 4]
    B[Node 2]
    C[Node 3]
    D[Node 1]
end

A[Node 4] --> E(Rear)
D[Node 1] --> F(Front)
D[Node 1] --> G(Delete)
H(Insert) --> D[Node 1]


  I(Insert) --> A[Node 4]
A[Node 4] --> J(Delete)


```

- Types of Double ended queue OR Dequeue

```mermaid
graph LR
    A[Double ended queue OR Dequeue] --> B(Input Restricted Queue)
    A[Double ended queue OR Dequeue] --> c(Output Restricted Queue)
```
