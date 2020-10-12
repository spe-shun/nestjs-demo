import {
    Controller,
    Post,
    Get,
    Body,
    HttpCode,
    Req,
    Param,
    Query,
    Headers,
    All,
    HttpException,
    HttpStatus,
} from '@nestjs/common'
import { CatsService } from './cats.service'
import { Cat } from './cat.inteface'
import { CreateCatDto } from './create-cat.dto'
import { Request } from 'express'

interface P {
    a?: string
    b?: number
}

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @All('alive')
    @HttpCode(201)
    alive(@Req() req: Request, @Body() body: P, @Param() param: P, @Query() query: P, @Headers() header: any) {
        // TODO
        console.log('req:', req.body)
        // TODO
        console.log('body:', body)
        // TODO
        console.log('param:', param)
        // TODO
        console.log('query:', query)
        // TODO
        console.log('header:', header)
        return 'I am alive.'
    }

    @Get('dead/:uuid')
    dead(@Param('uuid') param: number) {
        return 'uuid:' + param
    }

    @All('test')
    async test() {
        throw new HttpException('costom exception', HttpStatus.NOT_FOUND)
    }
}
