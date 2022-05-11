import { useContext } from "react";
import { UserContext } from "./context"

export default function Table2() {
    
    const ctx = useContext(UserContext);

    const Accountdata = ctx.transactions.filter((item) => item.user !== "");
    const transactionInfo = Accountdata.map((info, index) => {
      return (
        <div>
          <table className="table table-hover table-fixed table-striped" >
            <tr>
              <td key={info.transactionType}>{info.transactionType}</td>
              <td key={info.amount}>{info.amount}</td>
              <td key={info.transactionDate}>{info.transactionDate}</td>
            </tr>
          </table>
        </div>
      );
    });

    return <tbody>{transactionInfo}</tbody>;
  };