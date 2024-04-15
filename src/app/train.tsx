"use client"
import { Button, ButtonGroup } from "@nextui-org/react"
import { removeFirst, removeLast } from "./actions/server";

export const Train = ({ items, onChange }: { items: any[], onChange?: (items: any[]) => void }) =>{

    const handleRemoveFirst = async () => {
        const train = await removeFirst();
        const items = await train.json();
        onChange?.(items);
    }

    const handleRemoveLast = async () => {
        const train = await removeLast();
        const items = await train.json();
        onChange?.(items);
    }

    return (
        <div>
            <h1>My Train css</h1>

            <ButtonGroup variant="solid" >
                {
                items.map((item, index) => 
                <Button 
                    key={index} 
                    isDisabled={!(index === 0 || index === items.length - 1)}
                    color="danger"
                    onClick={index === 0 ? handleRemoveFirst : index === items.length - 1 ? handleRemoveLast : undefined}
                >{item}</Button>)
                }
            </ButtonGroup>
        </div>
    )
}