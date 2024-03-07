import { DataSource, Repository } from 'typeorm';
import { Option } from '../entities/options.entity';

export class OptionRepository extends Repository<Option> {
    constructor (private dataSource: DataSource) {
        super(Option, dataSource.createEntityManager());
    }
}