import Table from 'react-bootstrap/Table';

function Masterlist() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>CS#</th>
          <th>Status</th>
          <th>Modified Date</th>
          <th>User</th>
          <th>Cust</th>
          <th>Site</th>
          <th>Company</th>
          <th>PO#</th>
          <th>Product</th>
          <th>Serial#/IMEI#</th>
          <th>Received On</th>
          <th>Phone#</th>
          <th>SIM#</th>
        </tr>
      </thead>
      <tbody>
          {[...Array(20)].map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>284000{index + 1}</td>
              <td>Storeroom</td>
              <td>03/02/2025</td>
              <td>JYAK</td>
              <td>241000{index + 1}</td>
              <td>970234{index + 1}</td>
              <td>ADT Security</td>
              <td>2P0008735</td>
              <td>SEVEN</td>
              <td>700100{index + 1}</td>
              <td>25/11/2024</td>
              <td>6427104345{index + 1}</td>
              <td>89640500872282758{index + 1}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
}

export default Masterlist;