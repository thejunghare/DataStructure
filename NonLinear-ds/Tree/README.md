# Tree

Tree is used to represent data in hierarchical data. A method to organize and store data more effectively. It consist of a central node, structural nodes, and sub-nodes, which are connected via edges.

```mermaid
graph TD
    A[A] --> B[A]
    A --> C[C]
    B --> D[D]
    B --> E[E]
    D --> J[H]
    D --> K[I]
    J --> L[L]
    J --> M[M]
    E --> N[J]
    E --> O[K]
    C --> P[F]
    C --> Q[G]
    A[A] --- R(Root)
    B[B] --- I(Parent)
    E[E]--- S(Child)
    L[L] --- T(Leaf Node)
    M[M] --- T(Leaf Node)



```