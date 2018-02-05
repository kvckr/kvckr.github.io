---
layout: default
title: test
---

Задача: $$c'x \rightarrow max, Ax = b, x \ge 0$$

Решение:

1. Вычисляем матрицу $$B=A_Б^{-1}$$
2. Вектор потенциалов $$u'=c_Б'B$$
3. Вектор оценок $$\Delta = (\Delta_j, j=1..n) = u'A-c'$$ <br>
Проверяем критерий оптимальности $$\Delta_j \ge 0, j \in J_Н$$
4. Выбираем индекс $$j_0 \in J_Н$$, для которого $$\Delta_{j_0} < 0$$
5. Строим вектор $$z = BA_{j_0}$$ <br>
Проверяем условие $$z_i \le 0, i=1..m$$
6. Находим шаги <br>
$$\theta_i =
\begin{cases}
x_{ji}/z_i, & \text{если $z_i > 0$} \\
\infty, & \text{если $z_i \le 0$}
\end{cases}$$