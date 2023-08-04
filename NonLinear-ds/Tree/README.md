# Tree

Tree is used to represent data in hierarchical data. A method to organize and store data more effectively. It consist of a central node, structural nodes, and sub-nodes, which are connected via edges.

```mermaid
graph 
    A[A] --> B[A]
    A --> C[C]
    subgraph Sub Tree
    B --> D[D]
    B --> E[E]
    end
    D --> J[H]
    D --> K[I]
    J --> L[L]
    J --> M[M]
    E --> N[J]
    E --> O[K]
    subgraph Sub Tree
    C --> P[F]
    C --> Q[G]
    end
    %%   E-. text .-> D
    A[A] --- R(Root)
    B[B] --- I(Parent)
    E[E]--- S(Child)
    L[L] --- T(Leaf Node)
    M[M] --- T(Leaf Node)


    classDef green fill:#9f6,stroke:#333,stroke-width:2px;
    classDef orange fill:#f96,stroke:#333,stroke-width:2px;
    classDef blue fill:#6abeff,stroke:#333,stroke-width:2px;
    classDef yellow fill:#ffff00,stroke:#333,stroke-width:2px;
    class R green
    class T orange
    class S blue
    class I yellow
```