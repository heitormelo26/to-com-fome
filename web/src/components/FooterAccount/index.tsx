import React from "react";

import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

import { Text, Or, Hr, Button } from "./styles";

export interface FooterAccountProps {
  google: string;
  text: any[];
}

const FooterAccount: React.FC<FooterAccountProps> = ({ google, text }) => {
  return (
    <div className="mt-4 d-flex align-items-center flex-column">
      <div className="center-center w-100 mb-3">
        <div className="w-100">
          <Hr />
        </div>
        <Or>ou</Or>
        <div className="w-100">
          <Hr />
        </div>
      </div>
      <Button className="btn d-flex align-items-center mb-3" type="button">
        <Icon
          size={0.67}
          path={mdiGoogle}
          className="mr-2"
          title="Google"
          color="#FFFFFF"
        />
        {google}
      </Button>
      <Text>{text}</Text>
    </div>
  );
};

export default FooterAccount;
