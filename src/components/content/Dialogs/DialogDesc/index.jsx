import classNames from 'classnames'
import { useState, useEffect } from 'react';

import "./DialogDesc.css"
import Button from '../../button/index'
import PanoramaPersonage from '../../PanoramaPersonage/index'

const DialogDesc = ({
    side,
    namePersonage,
    Personage,
    currentQuestion,
    nextScene
}) => {

    const [page, setPage]= useState(0);

    const TextDesc = ({desc}) => {
        if (!desc) return '';
        return (
            <div>
                { Array.isArray(desc) ? 
                        desc.map( (t, index) => (
                            <div 
                                key={index}
                                className="dialogDesc-text"
                            >
                                { t }
                            </div> 
                        ))
                    :
                    <div className="dialogDesc-text">
                        { desc }
                    </div>  
                }
            </div>
        )
    }

    const ListDesc = ({ list }) => {
        if (!list) return '';
        return (
            <div className="dialogDesc-list">
                <ul>
                    { list.map( (item, i) => (
                        <li key={i}>
                            { item }
                        </li>
                    ))}
                </ul>

            </div>
        )
    }

    const Table = ({ data }) => {
        if (!data) return '';
        const { title, columns, values } = data;
        const keys = columns
            ?.reduce( (acc, newAcc) => ([...acc, newAcc.key]), [])

        return (
            <div className="container-table">
                <div className="title-table">
                    { title }
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            { columns.map( column => (
                                <th key={column.label}>
                                    { column.label }
                                </th>
                            )) }
                        </tr>
                    </thead>
                    <tbody>
                        { values.map( (value, i) => (
                            <tr key={i}>
                                {keys.map(k => (
                                    <td key={k}>
                                        { value[k] }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }

    const BoxText = () => {
        const infoPage = currentQuestion?.pages[page];

        return (
            <div className="dialogDesc-boxText">
                    
                {/* <div className="avatar-mobile-container">
                    <div className="avatar-mobile">
                        <Personage />
                    </div>
                </div> */}

                <TextDesc 
                    desc = {infoPage?.desc}
                />   

                <ListDesc
                    list = {infoPage?.list}
                />  
                <Table 
                    data = {infoPage?.table}
                />

                { (infoPage && infoPage.question ) &&
                    (
                        <div className="dialogDesc-text-question">
                            { infoPage.question }
                        </div>
                    )
                }

            </div>
        )
    }

    // useEffect(()=> {
    //     console.log('dialogDesc', currentQuestion)
    // }, [])

    return (
    <>
        <div className="dialogDesc-container">
            <div className={classNames({
                [`fl-container-${side}`]: true
            })}>
            </div>
            <div className="container-panorama">
                <PanoramaPersonage 
                    name={namePersonage}
                />
            </div>
            <div className="dialogDesc-content">
                <BoxText />
            </div>
            <div className="dialogDesc-footer">
                    { (
                        page >= 0 
                        && page !== (currentQuestion?.pages.length -1)
                      )
                        && (
                            <div className="dialogDesc-btn-right">
                                <Button 
                                    type="arrow right"
                                    onClick={()=>{
                                        setPage(page + 1)
                                    }}
                                />
                            </div>
                        )
                    }
                    
                    <div className="dialogDesc-btn-next">
                        { page === (currentQuestion?.pages.length -1) &&

                            <Button 
                                type="next"
                                onClick={nextScene}
                            />
                        }
                    </div>          

                    { page > 0 &&
                        <div className="dialogDesc-btn-left">
                            <Button 
                                type="arrow left"
                                onClick={()=>{
                                    setPage(page - 1)
                                }}
                            />
                        </div>
                    }

            </div>
        </div>
    </>
    )
}

export default DialogDesc;