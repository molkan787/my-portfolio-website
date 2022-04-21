import { readable } from 'svelte/store'
import static_data from './static_data'

export const projects = readable(static_data.projects)
