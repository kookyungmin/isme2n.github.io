---

layout: post

title:  "[자료구조] 1.B-tree"

subtitle: "[자료구조] 1.B-tree"

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

<br>
<br>
<br>

## B-트리 삽입

<br>
<br>
<br>
새로운 원소는 leaf 노드에 삽입됩니다~
<br>
<br>
이 때 node에 overflow가 발생하면(key=M개) 노드의 ┌M/2┐번째 키 값을 parent node로 올리고 노드 분할합니다.
<br>
<br>
한 번 직접 실습해볼까요??
<br>
<br>
다음 사이트는 B-트리를 그릴 수 있는 사이트입니다
<br>
<br>
<br>

<a href="https://www.cs.usfca.edu/~galles/visualization/BTree.html">https://www.cs.usfca.edu</a>

<br>
<br>
1부타 10까지 삽입해 보겠습니다. 이 때 tree의 degree는 4라고 하겠습니다.
<br>
<br>
<br>
그러면 각 노드는 최대 4-1=3개의 키 값을 가질 수 있습니다~!
<br>
<br>
<br>
따라서 1부터 3까지 삽입은 다음과 같이 하나의 노드에 삽입됩니다.
<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img03.png)

<br>
<br>
그 다음 4를 삽입하면 노드가 가질 수 있는 최대 키의 개수를 넘기에 ┌4/2┐=2번째 값인 2를 부모노드로 올립니다.
<br>
<br>
그리고 2를 기준으로 분기시킵니다!
<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img04.png)

<br>
<br>

![image](/image/DataStruc_img/DataStruc_img05.png)

<br>
<br>
6을 삽입할 때 또 노드가 가질 수 있는 키의 값을 넘으므로 ┌4/2┐=2번째 값인 4를 부모노드로 올리고,
<br>
<br>
양쪽으로 분기합니다!
<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img06.png)

<br>
<br>
<br>
어때요?? 생각보다 쉽죠! 나머지 수도 삽입해보겠습니다.
<br>
<br>
<br>

![image](/image/DataStruc_img/DataStruc_img07.png)

<br>
<br>

![image](/image/DataStruc_img/DataStruc_img08.png)

<br>
<br>

![image](/image/DataStruc_img/DataStruc_img09.png)

<br>
<br>

![image](/image/DataStruc_img/DataStruc_img09.png)

<br>
<br>
어때요~ 이진탐색트리에서 1부터 10까지 삽입하면 경사이진트리가 되는데 B-트리는 자동으로 균형을 맞추었죠??
<br>
<br>
<br>

## B-트리 삭제

<br>
<br>




