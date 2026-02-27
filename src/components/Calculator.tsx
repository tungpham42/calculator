// src/components/Calculator.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import {
  appendInput,
  clear,
  deleteLast,
  calculateResult,
  toggleShift,
  changeBase,
} from "../features/calculatorSlice";
import { Button, Row, Col, Typography, Card } from "antd";
import "../App.css";

const { Text, Title } = Typography;

const Calculator: React.FC = () => {
  const { expression, result, shiftMode, base } = useSelector(
    (state: RootState) => state.calculator,
  );
  const dispatch = useDispatch();

  const handleInput = (val: string) => dispatch(appendInput(val));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <Card className="casio-body" style={{ width: 380, border: "none" }}>
        {/* Branding */}
        <div className="casio-brand">
          <span>CASIO</span>
        </div>

        {/* LCD Screen */}
        <div className="casio-screen-container">
          <div className="screen-indicators">
            {shiftMode && <span style={{ color: "#000" }}>[S] </span>}
            <span style={{ color: "#555", marginLeft: "8px" }}>{base}</span>
          </div>
          <Text
            style={{
              color: "#111",
              fontSize: "20px",
              fontFamily: "monospace",
              wordWrap: "break-word",
            }}
          >
            {expression || "0"}
          </Text>
          <Title
            level={2}
            style={{
              color: "#000",
              margin: 0,
              textAlign: "right",
              fontFamily: "monospace",
            }}
          >
            {result}
          </Title>
        </div>

        {/* Top Controls Area */}
        <Row gutter={[12, 16]} style={{ marginBottom: "16px" }}>
          <Col span={6}>
            <Button
              className="casio-button btn-shift"
              block
              onClick={() => dispatch(toggleShift())}
            >
              SHIFT
            </Button>
          </Col>
        </Row>

        {/* Base Modes Area */}
        <Row gutter={[12, 12]} style={{ marginBottom: "16px" }}>
          <Col span={6}>
            <Button
              className={`casio-button ${base === "HEX" ? "btn-exe" : "btn-nav"}`}
              block
              onClick={() => dispatch(changeBase("HEX"))}
            >
              HEX
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className={`casio-button ${base === "DEC" ? "btn-exe" : "btn-nav"}`}
              block
              onClick={() => dispatch(changeBase("DEC"))}
            >
              DEC
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className={`casio-button ${base === "OCT" ? "btn-exe" : "btn-nav"}`}
              block
              onClick={() => dispatch(changeBase("OCT"))}
            >
              OCT
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className={`casio-button ${base === "BIN" ? "btn-exe" : "btn-nav"}`}
              block
              onClick={() => dispatch(changeBase("BIN"))}
            >
              BIN
            </Button>
          </Col>
        </Row>

        {/* Dynamic Math Functions Area */}
        {base === "DEC" ? (
          <Row gutter={[12, 12]} style={{ marginBottom: "20px" }}>
            <Col span={6}>
              <span className="secondary-label">{shiftMode ? "x!" : "x²"}</span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "!" : "^2")}
              >
                {shiftMode ? "x!" : "x²"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">{shiftMode ? "³√" : "√"}</span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "cbrt(" : "sqrt(")}
              >
                {shiftMode ? "³√" : "√"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">
                {shiftMode ? "10^x" : "log"}
              </span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "10^" : "log(")}
              >
                {shiftMode ? "10^" : "log"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">
                {shiftMode ? "e^x" : "ln"}
              </span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "e^" : "ln(")}
              >
                {shiftMode ? "e^" : "ln"}
              </Button>
            </Col>

            <Col span={6}>
              <span className="secondary-label">
                {shiftMode ? "sin⁻¹" : "sin"}
              </span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "asin(" : "sin(")}
              >
                {shiftMode ? "sin⁻¹" : "sin"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">
                {shiftMode ? "cos⁻¹" : "cos"}
              </span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "acos(" : "cos(")}
              >
                {shiftMode ? "cos⁻¹" : "cos"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">
                {shiftMode ? "tan⁻¹" : "tan"}
              </span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "atan(" : "tan(")}
              >
                {shiftMode ? "tan⁻¹" : "tan"}
              </Button>
            </Col>
            <Col span={6}>
              <span className="secondary-label">{shiftMode ? "e" : "π"}</span>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput(shiftMode ? "e" : "pi")}
              >
                {shiftMode ? "e" : "π"}
              </Button>
            </Col>
          </Row>
        ) : (
          <Row gutter={[12, 12]} style={{ marginBottom: "20px" }}>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("A")}
              >
                A
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("B")}
              >
                B
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("C")}
              >
                C
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("D")}
              >
                D
              </Button>
            </Col>

            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("E")}
              >
                E
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                disabled={base !== "HEX"}
                onClick={() => handleInput("F")}
              >
                F
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput("&")}
              >
                AND
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className="casio-button btn-math"
                block
                onClick={() => handleInput("|")}
              >
                OR
              </Button>
            </Col>
          </Row>
        )}

        {/* Smart Numpad Area */}
        <Row gutter={[12, 12]}>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("7")}
            >
              7
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN" || base === "OCT"}
              onClick={() => handleInput("8")}
            >
              8
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN" || base === "OCT"}
              onClick={() => handleInput("9")}
            >
              9
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-del-ac"
              block
              onClick={() => dispatch(deleteLast())}
            >
              DEL
            </Button>
          </Col>

          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("4")}
            >
              4
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("5")}
            >
              5
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("6")}
            >
              6
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-del-ac"
              block
              onClick={() => dispatch(clear())}
            >
              AC
            </Button>
          </Col>

          {/* FIX: Removed 'disabled={base === "BIN"}' from the '1' button here! */}
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              onClick={() => handleInput("1")}
            >
              1
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("2")}
            >
              2
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base === "BIN"}
              onClick={() => handleInput("3")}
            >
              3
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput("*")}
            >
              ×
            </Button>
          </Col>

          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              onClick={() => handleInput("0")}
            >
              0
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              disabled={base !== "DEC"}
              onClick={() => handleInput(".")}
            >
              .
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-number"
              block
              onClick={() => handleInput("Ans")}
            >
              Ans
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput("/")}
            >
              ÷
            </Button>
          </Col>

          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput("(")}
            >
              (
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput(")")}
            >
              )
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput("-")}
            >
              -
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="casio-button btn-math"
              block
              onClick={() => handleInput("+")}
            >
              +
            </Button>
          </Col>

          <Col span={18}></Col>
          <Col span={6}>
            <Button
              className="casio-button btn-exe"
              block
              onClick={() => dispatch(calculateResult())}
            >
              EXE
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Calculator;
