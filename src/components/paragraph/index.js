import React from "react";

import { P as ContainerP } from "./style";

function P ({children, ...props}) {
    return <ContainerP {...props}>{children}</ContainerP>
}

export default P