import Button from '@/components/Button'
import DismissKeyboard from '@/components/DismissKeyboard'
import { Dropdown } from '@/components/DropDown'
import TextField from '@/components/TextField'
import { createMetric } from '@/db/queries'
import { frequencies, units } from '@/db/types'

import React, { useState } from 'react'
import { Text, View } from 'react-native'

const NewMetric = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [unit, setUnit] = useState("")
    const [freqeuncy, setFrequency] = useState("")

    const createNewMetric = async () => {
        await createMetric({
            category_id: null,
            name,
            description: description ? description : null,
            log_frequency: freqeuncy,
            unit: unit
        })
        setName(""); setDescription(""); setUnit("")
        alert("User Created")
    }

    return (
        <DismissKeyboard>
            <View className='flex-1 p-10 pt-[100px] bg-background gap-5'>
                <Text className='text-2xl font-bold text-title'>
                    Add Metric
                </Text>
                <View className='bg-panel-1 border border-border rounded-lg outline-1
                    outline-stone-700/30 p-5 gap-5'>
                    <TextField 
                        name='Metric Name' 
                        placeholder='e.g Moring Temp...'
                        value={name}
                        setValue={setName}
                    />
                    <TextField 
                        name='Description' 
                        placeholder='Enter description...'
                        value={description}
                        setValue={setDescription}
                        multiline={true}
                    />
                    <View className='gap-2'>
                        <Text className='text-subtext-1 font-medium'>
                            Log Frequency
                        </Text>
                        <Dropdown
                            options={frequencies}
                            selected={freqeuncy}
                            onSelect={setFrequency}
                            showSearch={false}
                            placeholder='Select Log Frequency'
                        />
                    </View>
                    <View className='gap-2'>
                        <Text className='text-subtext-1 font-medium'>
                            Unit
                        </Text>
                        <Dropdown
                            options={units}
                            selected={unit}
                            onSelect={setUnit}
                            showSearch={true}
                            placeholder='Select Unit'
                        />
                    </View>
                   <Button 
                        onClick={createNewMetric}>
                        Create
                   </Button>
                </View>
            </View>
        </DismissKeyboard>
    )
}

export default NewMetric