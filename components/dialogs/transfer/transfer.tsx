import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react";
import { ArrowLeftIcon, BitCoinFilledIcon, CancelIcon, CheckCircleFilledIcon, CoinSwapIcon, EtherumFilledIcon, NigeriaIcon } from "../../icons";
import { Carousel } from 'react-responsive-carousel';
import ReactSimplyCarousel from 'react-simply-carousel';

const Transfer = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: any }) => {

    interface IFormData {
        fromCoin?: string,
        from?: number,
        to?: string,
        toCoin?: string,
        step: number
    }
    const formData: IFormData = {
        fromCoin: 'bitcoin',
        step: 1,
        toCoin: 'etherum'
    }
    const [form, setForm] = React.useState({ ...formData });
    const handleSetFormData = (data: object) => {
        setForm({ ...formData, ...data });
    };
    const handleDialogClose = () => {
        if (form.step == 3) handleSetFormData({ step: 1 })
        setVisibilityState(false);
    };
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            {
                form.step == 1 && (
                    <div>
                        <div className="dialog-page">
                            <div className="dialog-header">
                                <div className="title">Transfer</div>
                                <div className="action-btn">
                                    <button onClick={handleDialogClose}>
                                        <CancelIcon color="#1d38e4"></CancelIcon>
                                    </button>
                                </div>
                            </div>
                            <div className="content padding">
                                <div >
                                    <label className="form-label">Recipient</label>
                                    <TextField
                                        className="amount-field"
                                        variant="standard"
                                        placeholder="Name, @username, or email"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />

                                </div>

                                <div className="recent-contacts my-3">
                                    <div className="headline">Recent Contacts</div>
                                    <ReactSimplyCarousel
                                        activeSlideIndex={activeSlideIndex}
                                        onRequestChange={setActiveSlideIndex}
                                        itemsToShow={1}
                                        itemsToScroll={1}
                                        forwardBtnProps={{
                                            style: {
                                                visibility: 'hidden',
                                            },
                                            children: <span>{`>`}</span>,
                                        }}
                                        backwardBtnProps={{
                                            //here you can also pass className, or any other button element attributes
                                            style: {
                                                visibility: 'hidden'
                                            },
                                            children: <span>{`<`}</span>,
                                        }}
                                        responsiveProps={[
                                            {
                                                itemsToShow: 7,
                                                itemsToScroll: 7,
                                                minWidth: 768,
                                            },
                                        ]}
                                        speed={400}
                                        easing="linear"
                                    >
                                        <div style={{ width: 50, height: 50, background: '#ff80ed' }}>
                                            slide 0
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#065535' }}>
                                            slide 1
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#000000' }}>
                                            slide 2
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#133337' }}>
                                            slide 3
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#ffc0cb' }}>
                                            slide 4
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#ffffff' }}>
                                            slide 5
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#ffffff' }}>
                                            slide 5
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#ffffff' }}>
                                            slide 5
                                        </div>
                                        <div style={{ width: 50, height: 50, background: '#ffffff' }}>
                                            slide 5
                                        </div>
                                    </ReactSimplyCarousel>

                                </div>

                                <div >
                                    <label className="form-label">Amount</label>
                                    <TextField
                                        className="amount-field"
                                        variant="standard"
                                        placeholder="Enter an amount"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <div className="d-flex">
                                                    <NigeriaIcon></NigeriaIcon>  <span className="transfer-currency">NGN</span>
                                                </div>
                                            ),
                                        }}
                                    />

                                </div>

                                <div className="mt-4 mb-4">
                                    <button onClick={() => setForm({ step: 2 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
            {
                form.step == 2 && (
                    <div className="dialog-page p-4">
                        <div className="mb-3 back-nav" onClick={() => handleSetFormData({ step: 1 })}>
                            <ArrowLeftIcon color="black"></ArrowLeftIcon>
                        </div>
                        <div className="heading">Enter your pin</div>
                        <div className="content text-center">
                            <TextField
                                className="form-control-2 pin-field"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                variant="standard"
                            />
                            <TextField
                                className="form-control-2 pin-field"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                variant="standard"
                            />
                            <TextField
                                className="form-control-2 pin-field"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                variant="standard"
                            />
                            <TextField
                                className="form-control-2 pin-field"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                variant="standard"
                            />
                            <TextField
                                className="form-control-2 pin-field"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                variant="standard"
                            />
                        </div>
                        <div className="mt-5">
                            <button onClick={() => setForm({ step: 3 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                        </div>
                    </div>
                )
            }
            {
                form.step == 3 && (
                    <div className="dialog-page p-4">
                        <div className="heading">Success</div>
                        <div className="heading-note">Transaction successful</div>
                        <div className="content text-center">
                            <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                        </div>
                        <div className="mb-3">
                            <button onClick={handleDialogClose} className='btn btn-radius w-100 btn-primary'>Okay</button>
                        </div>
                    </div>
                )
            }

        </Dialog >
    )
}

export default Transfer