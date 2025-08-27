import { type FC, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { t } from 'i18next';

const people = [
	{
		id: 0,
		name: 'AUD',
		avatar: `/static/aud.svg`,
	},
	{
		id: 1,
		name: 'USD',
		avatar: `/static/usd.svg`,
	},
	{
		id: 2,
		name: 'CHY',
		avatar: `/static/chy.svg`,
	},
]

const CoinSelect : FC<{ setCoin: (arg0: number) => void  }> = ({ setCoin }) => {
	const [selected, setSelected] = useState(people[0])

	return (
			<Listbox value={selected} onChange={(e) => {
				setSelected(e)
				setCoin(e.id)
			}}>
				<Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">{t("type")}</Label>
				<div className="relative mt-2">
					<ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-gray-800/50 dark:text-white dark:outline-white/10 dark:focus-visible:outline-indigo-500">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
								alt=""
								src={selected.avatar}
								className="size-5 shrink-0 bg-gray-100 dark:bg-gray-700 dark:outline dark:-outline-offset-1 dark:outline-white/10"
						/>
            <span className="block truncate">{selected.name}</span>
          </span>
						<ChevronUpDownIcon
								aria-hidden="true"
								className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
						/>
					</ListboxButton>

					<ListboxOptions
							transition
							className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
					>
						{people.map((person) => (
								<ListboxOption
										key={person.id}
										value={person}
										className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none
											 data-focus:bg-gradient-to-r data-focus:from-[#1c3fda] data-focus:via-[#0099cc] data-focus:to-[#01c26e]
											 data-focus:text-white data-focus:outline-hidden
											 dark:text-white"
								>
									<div className="flex items-center">
										<img
												alt=""
												src={person.avatar}
												className="size-5 shrink-0 dark:outline dark:-outline-offset-1 dark:outline-white/10"
										/>
										<span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
											{person.name}
										</span>
									</div>

									<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white group-not-data-selected:hidden">
										<CheckIcon aria-hidden="true" className="size-5" />
									</span>
								</ListboxOption>
						))}
					</ListboxOptions>
				</div>
			</Listbox>
	)
}

export default CoinSelect;