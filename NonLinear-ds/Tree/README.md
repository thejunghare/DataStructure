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
```

## Type of tree
```mermaid
graph LR
    A[Tree] --> B(Binary Tree)
    A[Tree] --> c(Ternary Tree)
    A[Tree] --> D(N-ary Tree)
```

- Binary tree: In a binary tree, each node can have a maximum of two children linked to it. Some common types of binary trees include full binary trees, complete binary trees, balanced binary trees, and degenerate or pathological binary trees.
  

- Ternary Tree: A Ternary Tree is a tree data structure in which each node has at most three child nodes, usually distinguished as “left”, “mid” and “right”.


- N-ary Tree or Generic Tree: Generic trees are a collection of nodes where each node is a data structure that consists of records and a list of references to its children(duplicate references are not allowed). Unlike the linked list, each node stores the address of multiple nodes.

## Operation of tree
```mermaid
graph LR
    A[Operation] --> B(Create)
    A[Operation] --> c(Insert)
    A[Operation] --> D(Search)
    A[Operation] --> E(Traversal)
```

## Real life example for tree DS (file system)
```mermaid
graph LR
    A[User] --> B(Home)
    B[Home] --> C(Desktop)
    C[Desktop] --> D(Documents)
    C[Desktop] --> E(Files)
    E[Files] --> F(File 1)
    E[Files] --> G(File 2)
    E[Files] --> H(File 3)
```