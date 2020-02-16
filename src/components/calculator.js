import React from "react"

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: 0,
      valueB: 0,
    }
  }

  render() {
    const { valueA, valueB } = this.state;
    //parseIntは文字列を整数に変換
    const sum = parseInt(valueA) + parseInt(valueB);

    return (
      <div>
        <input
          type="text"
          //input要素の初期値を返す
          defaultValue={valueA}
          //onInput()テキストフィールドに「入力があった時」に発生するイベント。
          onInput={(e) => {
            this.setState({ valueA: e.target.value });
          }}
        />
        +
        <input
          type="text"
          defaultValue={valueB}
          onInput={(e) => {
            this.setState({ valueB: e.target.value });
          }}
        />
        =
        <input
          type="text"
          //renderで定義したsum
          value={sum}
          //読み取り専用になる
          readOnly
        />
      </div>

    )
  }
}

export default Calculator;