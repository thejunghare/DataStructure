# Queue

Defined as ordered list, helps **insert** operations to be performed at one end called **rear** and **delete** for one end called **front**

## Diagram
```
graph LR
  A(Queue) --- B[Front]
  A --- C[Rear]
  A --> D[enqueue()]
  A --> E[dequeue()]
  A --> F[isEmpty()]
  A --> G[isFull()]
  
  style A fill:#f9f,stroke:#333,stroke-width:2px
  style B fill:#fff,stroke:#333,stroke-width:2px
  style C fill:#fff,stroke:#333,stroke-width:2px
  style D, E, F, G fill:#fff,stroke:#333,stroke-width:2px
```
