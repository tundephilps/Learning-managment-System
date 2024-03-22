// pages/login.tsx
"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='700' preserveAspectRatio='none' viewBox='0 0 1440 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1076%26quot%3b)' fill='none'%3e%3crect width='1440' height='700' x='0' y='0' fill='rgba(5%2c 31%2c 62%2c 1)'%3e%3c/rect%3e%3cpath d='M553.477%2c491.1C626.49%2c487.362%2c677.601%2c425.434%2c710.885%2c360.341C740.772%2c301.892%2c743.595%2c235.36%2c714.278%2c176.623C681.12%2c110.191%2c627.718%2c45.894%2c553.477%2c44.972C478.156%2c44.036%2c422.639%2c106.946%2c385.605%2c172.54C349.338%2c236.775%2c331.045%2c312.768%2c365.435%2c378.027C401.981%2c447.378%2c475.189%2c495.108%2c553.477%2c491.1' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1121.902%2c403.988C1157.609%2c405.942%2c1196.826%2c399.308%2c1215.644%2c368.899C1235.198%2c337.301%2c1225.523%2c297.845%2c1207.797%2c265.186C1189.02%2c230.59%2c1161.243%2c194.862%2c1121.902%2c196.183C1083.797%2c197.463%2c1061.797%2c236.193%2c1045.452%2c270.638C1031.837%2c299.331%2c1028.597%2c331.975%2c1044.393%2c359.527C1060.271%2c387.222%2c1090.026%2c402.244%2c1121.902%2c403.988' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1064.572%2c587.541C1092.068%2c585.403%2c1113.962%2c568.572%2c1129.502%2c545.788C1148.062%2c518.576%2c1169.697%2c485.636%2c1153.725%2c456.829C1137.529%2c427.618%2c1097.971%2c428.348%2c1064.572%2c428.681C1032.004%2c429.006%2c996.413%2c431.41%2c978.45%2c458.579C958.966%2c488.048%2c959.809%2c528.08%2c979.429%2c557.459C997.345%2c584.288%2c1032.408%2c590.042%2c1064.572%2c587.541' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M997.714%2c33.309C1018.578%2c34.55%2c1040.15%2c25.992%2c1050.335%2c7.741C1060.32%2c-10.152%2c1055.332%2c-32.313%2c1043.777%2c-49.234C1033.653%2c-64.06%2c1015.666%2c-69.117%2c997.714%2c-69.317C979.308%2c-69.522%2c959.3%2c-66.07%2c949.836%2c-50.282C940.175%2c-34.166%2c945.582%2c-14.238%2c954.921%2c2.067C964.329%2c18.493%2c978.818%2c32.185%2c997.714%2c33.309' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1387.377%2c761.435C1417.916%2c759.544%2c1443.339%2c741.452%2c1459.731%2c715.616C1477.66%2c687.358%2c1491.558%2c652.334%2c1475.075%2c623.209C1458.43%2c593.798%2c1421.171%2c587.903%2c1387.377%2c587.767C1353.268%2c587.63%2c1317.051%2c593.909%2c1298.446%2c622.497C1278.344%2c653.386%2c1277.774%2c694.61%2c1297.642%2c725.65C1316.248%2c754.719%2c1352.929%2c763.568%2c1387.377%2c761.435' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M746.431%2c673.853C787.147%2c675.434%2c816.972%2c640.134%2c837.158%2c604.739C857.11%2c569.755%2c869.846%2c527.608%2c849.736%2c492.714C829.606%2c457.786%2c786.625%2c444.205%2c746.431%2c447.316C711.236%2c450.04%2c683.974%2c475.569%2c667.547%2c506.814C652.364%2c535.693%2c653.206%2c568.634%2c667.139%2c598.137C683.865%2c633.555%2c707.291%2c672.333%2c746.431%2c673.853' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1063.726%2c776.74C1116.517%2c775.822%2c1159.97%2c738.598%2c1184.81%2c692.007C1208.122%2c648.283%2c1207.503%2c596.305%2c1182.838%2c553.33C1158.059%2c510.155%2c1113.463%2c483.106%2c1063.726%2c481.035C1009.902%2c478.794%2c953.722%2c496.391%2c926.098%2c542.64C897.89%2c589.867%2c907.241%2c648.928%2c935.12%2c696.35C962.581%2c743.06%2c1009.55%2c777.682%2c1063.726%2c776.74' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M450.384%2c654.791C485.08%2c655.678%2c523.588%2c652.646%2c542.332%2c623.436C562.195%2c592.481%2c554.814%2c552.527%2c536.458%2c520.655C518.063%2c488.715%2c487.238%2c464.35%2c450.384%2c463.781C412.618%2c463.197%2c377.585%2c484.72%2c359.577%2c517.922C342.334%2c549.713%2c346.24%2c588.798%2c366.234%2c618.934C384.301%2c646.166%2c417.715%2c653.956%2c450.384%2c654.791' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1383.052%2c630.491C1452.067%2c628.229%2c1498.918%2c567.098%2c1530.745%2c505.818C1559.623%2c450.216%2c1568.376%2c385.861%2c1538.791%2c330.632C1507.52%2c272.255%2c1449.252%2c228.286%2c1383.052%2c230.103C1319.301%2c231.853%2c1273.387%2c283.591%2c1241.448%2c338.792C1209.441%2c394.11%2c1189.674%2c458.586%2c1217.584%2c516.08C1248.971%2c580.735%2c1311.22%2c632.845%2c1383.052%2c630.491' fill='rgba(8%2c 57%2c 107%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1076'%3e%3crect width='1440' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  z-index: 50;
`;
const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
`;

const Divider = styled.div`
  height: 200px;
  width: 2px;
  background-color: lightgray;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginWrapper = styled.div`
  width: 420px;

  backdrop-filter: blur(9px);

  color: #fff;
  border-radius: 12px;
  padding: 30px 40px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const Logo = styled(Image)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const FormLogin = styled.div`
  font-size: 36px;
  text-align: center;
`;
const Form = styled.form``;
const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  margin: 30px 0;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
  ::placeholder {
    color: #fff; /* Placeholder text color */
    opacity: 0.5; /* Placeholder text opacity */
  }
`;

const Forgot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
`;

const Checkbox = styled.input`
  accent-color: #fff;
  margin-right: 3px;
`;

const Label = styled.label``;

const Anchor = styled(Link)`
  color: #fff;
  text-decoration: none;
  ::hover {
    text-decoration: underline;
  }
`;

const RegisterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  ::hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-left: 90px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

const Register = styled.div`
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
`;

const RegisterNote = styled.p``;

const Login = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };

  return (
    <Container>
      <Background />
      <Wrapper>
        {/* Your login form components */}
        <LoginForm>
          <Logo src={logo} width={400} height={400} alt="" />
          <Divider />
          <LoginWrapper>
            <Form action="">
              <FormLogin>Login</FormLogin>
              <InputBox>
                <Input placeholder="Username" type="text" />
              </InputBox>
              <InputBox>
                <Input placeholder="Password" type="password" />
              </InputBox>
              <Forgot>
                <Label>
                  <Checkbox type="checkbox" />
                  Remember Me
                </Label>
                <Anchor href="#">Forgot Password</Anchor>
              </Forgot>
              <Link href="/">
                <Button
                  // onClick={() => navigate("calendar")}
                  type="submit"
                >
                  Login
                </Button>
              </Link>
              <Register>
                <RegisterNote>
                  Visit the official School Website?{" "}
                  <RegisterLink href="#">Here</RegisterLink>
                </RegisterNote>
              </Register>
            </Form>
          </LoginWrapper>
        </LoginForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
