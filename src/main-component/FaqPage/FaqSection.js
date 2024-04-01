import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const FaqSection = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>THow to create an account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>How to write the changelog for theme updates?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography> What happens when my license expires?</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography> Do you recommend using a download manager software?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel5bh-header"
                            >
                                <Typography> Does it matter how long I wait to file a lawsuit?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FaqSection;