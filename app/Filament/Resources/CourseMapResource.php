<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseMapResource\Pages;
use App\Filament\Resources\CourseMapResource\RelationManagers;
use App\Models\CourseMap;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CourseMapResource extends Resource
{
    protected static ?string $model = CourseMap::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('title')->label('Назва курсу')->required(),
            TextInput::make('semester')->label('Семестр')->required(),
            TextInput::make('program')->label('Освітня програма')->required(),
            Select::make('professor_id')
                ->label('Викладач')
                ->relationship('professor', 'name')
                ->searchable()
                ->preload()
                ->required(),
            Repeater::make('documents')
                ->relationship()
                ->label('Документи')
                ->schema([
                    TextInput::make('name')
                        ->label('Назва документа')
                        ->required(),

                    FileUpload::make('file_path')
                        ->label('Файл')
                        ->directory('course-documents')
                        ->preserveFilenames()
                        ->required()
                        ->acceptedFileTypes(['application/pdf', 'application/msword', 'application/zip']),
                ])
                ->collapsible()
                ->columns(1),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Назва курсу')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('semester')
                    ->label('Семестр')
                    ->sortable(),

                TextColumn::make('program')
                    ->label('Освітня програма')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('professor.name')
                    ->label('Викладач')
                    ->searchable()
                    ->sortable()
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourseMaps::route('/'),
            'create' => Pages\CreateCourseMap::route('/create'),
            'edit' => Pages\EditCourseMap::route('/{record}/edit'),
        ];
    }
}
