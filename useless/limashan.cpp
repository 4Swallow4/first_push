#include <stdio.h>

int main () {
    char a;
    while (1) {
        scanf("%c", &a);
        if (a>='A'&& a<='Z') {
            a += 32;
        }

        printf("%c", a);

        if (a=='0') {
            break;
        }
    }
    return 0;
}