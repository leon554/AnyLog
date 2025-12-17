import { Dropdown } from '@/components/DropDown'
import TextField from '@/components/TextField'
import { createMetric } from '@/db/queries'
import { units } from '@/db/types'

import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const NewMetric = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [unit, setUnit] = useState("")

    const createNewMetric = async () => {
        await createMetric({
            category_id: null,
            name,
            description: description ? description : null,
            log_frequency: "daily",
            unit: unit
        })
        setName(""); setDescription(""); setUnit("")
        alert("User Created")
    }

    const points = [
        { date: new Date('2025-01-01'), value: 70 },
        { date: new Date('2025-01-02'), value: 72 },
        { date: new Date('2025-01-03'), value: 71 },
    ]

    return (
        <View className='flex-1 p-10 pt-[100px] bg-white gap-5'>
            <Text className='text-2xl font-bold '>
                Add Metric
            </Text>
            <View className='bg-slate-300 rounded-lg outline-1
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
                <TextField 
                    name='Unit' 
                    placeholder='Enter password...'
                    value={unit}
                    setValue={setUnit}
                    secureText={true}
                />
                <Dropdown
                    options={units}
                    selected={unit}
                    onSelect={setUnit}
                />
                <TouchableOpacity
                    className='bg-slate-600 p-3 flex justify-center
                        items-center rounded-md'
                    onPress={createNewMetric}
                >
                    <Text className='text-neutral-300 font-bold'>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewMetric