import { OperationTypes } from "../../views/OperationTypes/OperationTypes";
import { useState } from 'react';
import { SetBoard } from "../../views/OperationConstructor/SetBoard/SetBoard";
import { WithoutValue } from "../../views/OperationConstructor/WithoutValue/WithoutValue";
import { DeleteBoard } from "../../views/OperationConstructor/DeleteBoard/DeleteBoard";
import { AppendBoard } from "../../views/OperationConstructor/AppendBoard/AppendBoard";

export const Action = () => {

    const operations = [
        "SET",
        "GET",
        "DELETE",
        "EXISTS",
        "APPEND",
        "KEYS",
        "TTL"
    ];

    const [selectedOperation, setSelectedOperation] = useState(null);

    const handleOperationSelection = (operation) => {
        setSelectedOperation(operation);
    };


    return ( 
        <div>
            <OperationTypes 
                operations={operations}
                selectedOperation={selectedOperation} 
                onSelectOperation={handleOperationSelection}
            />

            {selectedOperation == 'SET' ? <SetBoard/> : null}
            {selectedOperation == 'GET' ? <WithoutValue method='get'/> : null}
            {selectedOperation == 'DELETE' ? <DeleteBoard /> : null}
            {selectedOperation == 'EXISTS' ? <WithoutValue method='exists'/> : null}
            {selectedOperation == 'APPEND' ? <AppendBoard/> : null}
            {selectedOperation == 'KEYS' ? <WithoutValue method='keys'/> : null}
            {selectedOperation == 'TTL' ? <WithoutValue method='ttl'/> : null}

        </div>
     );
}
