/*
inserting and deleting in middle of a array can be tricky that's where linked list come in

linked list terminology head->start of list, link->has link to next node, node, tail-> end of list

Types: singly, doubly, circular

linked list elements/node can be anywhere in the memory, unlike array which has elements in a block
*/

#include <stdio.h>
#include <stdlib.h>

struct node
{
    int value;
    struct node *next;
};

typedef struct node node_t;

void printlist(node_t *head)
{
    node_t *temp = head;

    while (temp != NULL)
    {
        printf("%d - ", temp->value);
        temp = temp->next;
    }

    printf("\n");
}

int main(void)
{
    node_t n1, n2, n3;
    node_t *head;

    n1.value = 45;
    n2.value = 23;
    n3.value = 32;

    head = &n1;
    n1.next = &n2;
    // n2.next = &n3;
    // n3.next = NULL; // null is where list stop

    // add element in midddle
    node_t n4;
    n4.value = 9;
    n2.next = &n4;
    n4.next = &n3;
    n3.next = NULL;

    head = head->next; // change head

    printlist(head);
    return 0;
}