import React from 'react';
const thStyle = {
  fontFamily: 'Anton',
  fontWeight: 'normal',
  fontStyle: 'normal',
};

class DataComponent extends React.Component {
  render() {
    return (
      <table style={thStyle} className="table">
        <tbody>
          <tr>
            <td>Site web :</td>
            <td>&nbsp;</td>
            <td>WWW.SAEEL.NET</td>
          </tr>
          <tr>
            <td>EMAIL :</td>
            <td>&nbsp;</td>
            <td>saeel.electromenager.outlook.fr</td>
          </tr>
          <tr>
            <td>Produit :</td>
            <td>&nbsp;</td>
            <td>{this.props.order.createdAt}</td>
          </tr>
          <tr>
            <td>Produit :</td>
            <td>&nbsp;</td>
            <td>{this.props.order.title}</td>
          </tr>
          <tr>
            <td>Quantity :</td>
            <td>&nbsp;</td>
            <td>{this.props.order.quantity}</td>
          </tr>
          <tr>
            <td>Prix unité</td>
            <td>&nbsp;</td>
            <td>{this.props.order.price},00 DA</td>
          </tr>
          <tr>
            <td>Livraison</td>
            <td>&nbsp;</td>
            <td>2000,00 DA</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>&nbsp;</td>
            <td>{this.props.order.amount}</td>
          </tr>
        </tbody>
        <caption>Bon d'achat</caption>
      </table>
    );
  }
}
export default DataComponent;
