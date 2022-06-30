import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "./style";
import { IQuestions } from "../../config/javascript";
import { FC, useState } from "react";

interface AccordionProps {
    list: IQuestions[];
}
export const CustomizedAccordions: FC<AccordionProps> = ({ list }) => {
    const [expanded, setExpanded] = useState<string | false>("panel1");

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {list.map((question, index) => (
                <Accordion
                    key={question.id}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                >
                    <AccordionSummary
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                    >
                        <Typography>
                            {index + 1}. {question.name}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{question.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};
