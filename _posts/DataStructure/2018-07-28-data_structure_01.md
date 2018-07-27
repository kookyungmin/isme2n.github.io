---

layout: post

title:  [자료구조] 1.B-tree

subtitle: [자료구조] 1.B-tree

date:   2018-07-28 04:59:00 -0500

categories: Study

tags: DataStructure

---

## 검색을 위한 이진탐색트리

<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img01.png)

<br>
<br>
이진탐색트리는 컴퓨터 트리 자료구조로 각각의 노드가 최대 두 개의 자식 노드를 가집니다.
<br>
<br>
부모노드를 기준으로 왼쪽서브트리의 노드들은 모두 부모노드보다 작고, 오른쪽 서브 트리의 노드들은 모두 부모노드보다 큽니다.
<br>
<br>
이러한 특성 덕분에 어떤 수를 탐색할 때 시간복잡도는 트리의 높이가 h라고 했을 때, O(h)가 됩니다.
<br>
<br>
만약 n개의 노드를 가지는 이진트리가 완전 이진 트리처럼 균형이 잡혀있다면 높이가 ┌log<sub>2</sub>n ┐ 이므로, 시간복잡도가 O(┌log<sub>2</sub>n ┐)가 됩니다!
<br>
<br>
하지만, 이진탐색 트리가 다음과 같이 경사 이진 트리 형태이면, 높이가 n이므로 0(n)의 시간복잡도를 가져서 비효율적입니다.
<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img02.png)

<br>
<br>
이러한 문제점을 해결하기 위해 Balance tree가 등장했습니다.
<br>
<br>
Balance tree는 노드가 삽입될 때마다 자동으로 균형을 맞춰주는 트리입니다.
<br>
<br>
B-tree와 B<sup>+</sup>-tree, B<sup>*</sup>-tree 는 Balance tree 중 하나로 이진 트리와 다르게 노드가 2개이상의 자식을 가질 수 있습니다.
<br>
<br>
주로 데이터베이스의 인덱스가 B-tree 구조입니다.
<br>
<br>
한 번 살펴보죠!
<br>
<br>
<br>

## B-tree

<br>
<br>
B-tree의 특성은 다음과 같습니다. (M: 트리의 degree) //트리의 degree는 최대로 자식노드와 연결할 수 있는 간선의 개수
<br>
<br>
<br>

1.root node가 leaf node 인 경우를 제외하고 항상 최소 2개의 자식을 가진다.

<br>
<br>

2.root node와 leaf node를 제외한 모든 node 들은 최소 ┌M/2┐, 최대 M개의 서브트리를 가진다.

<br>
<br>

3.모든 leaf node 들은 같은 level에 있어야 한다.

<br>
<br>

4.새로운 key 값은 leaf node에 삽입된다.

<br>
<br>

5.node 내의 key 값들은 오름차순이다.

<br>
<br>

6.leaf node는 최소 ┌M/2┐-1개의 key를 가지고 있어야 한다.
