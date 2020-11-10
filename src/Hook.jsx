import React, { useState, useEffect } from "react";

function Counter() {
    // 声明一个新的叫做 “count” 的 state 变量
    // useState：使用hook来实现类似类组件的状态管理操作
    // []是数组解构赋值，第一个是读取数据，第二个是设置数据的方法（类似于this.setState），useState中的是数据的默认值
    // 只需要顺序按照上面的要求，里面的名字无所谓
    const [a, b] = useState(0);

    // effact hook，模拟类似于类组件的声明周期的作用
    // 该方法，会在组件首次挂载和后续更新后执行触发。
    useEffect(() => {
        console.log('已经可以使用了');
        document.title = `You clicked ${a} times`;
        // ajax
    })
    return (
        <div>
            <p>你已经点了 {a} 次</p>
            <button onClick={() => b(a + 1)}>点击</button>
        </div>
    );
}

export default Counter;
