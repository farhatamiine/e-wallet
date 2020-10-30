import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/core";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { addMoneyToWallet } from "../../Store/actions/walletAction";
import {
  Form,
  FormTransaction,
  Header1,
  Header2,
  TransactionMain,
} from "../../styles";
import { darkBlue } from "../../styles/colors";

class Transaction extends React.Component {
  state = {
    selectedType: "",
    amount: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMoneyToWallet(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  validateForm() {
    return this.state.selectedType.length > 0 && this.state.amount > 0;
  }
  render() {
    return (
      <TransactionMain>
        <Header1>transaction</Header1>
        <FormTransaction boxShadow="sm" marginTop="5px">
          <Form onSubmit={this.handleSubmit}>
            <Header2 style={{ marginBottom: "20px" }}>
              Set up your wallet
            </Header2>
            <FormControl>
              <FormLabel htmlFor="email">Select a Type</FormLabel>
              <Select
                placeholder="Select option"
                onChange={this.handleChange}
                marginBottom="10px"
                id="selectedType"
              >
                <option value="Balance">Balance</option>
                <option value="Income">Income</option>
                <option value="Expance">Expance</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Add amount</FormLabel>
              <InputGroup width="100%">
                <InputLeftElement
                  marginLeft="5px"
                  children={<FaMoneyBillAlt color="#647cdb" size={20} />}
                />
                <Input
                  _hover={{ borderColor: darkBlue }}
                  id="amount"
                  _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
                  type="number"
                  onChange={this.handleChange}
                  placeholder="Amount"
                />
              </InputGroup>
            </FormControl>
            <Button
              bg={darkBlue}
              _focus={{ outline: 0 }}
              _hover={{ backgroundColor: "#0536FF" }}
              color="#ffff"
              w="100%"
              marginTop="20px"
              type="submit"
              variant="solid"
              isDisabled={!this.validateForm}
            >
              Add it to my wallet
            </Button>
          </Form>
        </FormTransaction>
      </TransactionMain>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMoneyToWallet: (wallet) => dispatch(addMoneyToWallet(wallet)),
  };
};
export default connect(null, mapDispatchToProps)(Transaction);
