import React from "react";

import useTranslation from "../hooks/useTranslation";
import Button from "./Button";

const FetchingButton = () => {
    const t = useTranslation();
    return <Button title={t("fetching")} disabled={true} style={{ borderRadius: 15 }} />;
};
export default FetchingButton;
