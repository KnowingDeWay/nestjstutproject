import { User } from '../../modules/user/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
    track?: boolean;

    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const userFactory = factoryManager.get(User);
        await userFactory.save();
    }
    
}
