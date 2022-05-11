import { useContext } from "react";
import { UserContext } from "./context"

export default function Header() {
    
    const ctx = useContext(UserContext);

    return (
      <div>
        <h4
          className="header"
          style={{
            fontSize: "1.3rem",
            color: "white",
            padding: ".4rem",
            border: "solid black 1px",
            backgroundColor: "#0079d5",
            width: "100%",
          }}
        >
          Account No. ending in: xxx-xxx-xxx-{ctx.users[0].accountNumber}
        </h4>
        <h4
          className="header"
          style={{
            fontSize: "1.3rem",
            color: "white",
            padding: ".4rem",
            border: "solid black 1px",
            backgroundColor: "grey",
            width: "100%",
          }}
        >
          Current Balance: ${ctx.users[0].balance}
        </h4>
        <table class="table table-hover table-fixed">
          <tr style={{ width: "100%" }}>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Transaction Date </th>
          </tr>
        </table>
      </div>
    );
  };