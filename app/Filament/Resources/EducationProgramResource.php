<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EducationProgramResource\Pages;
use App\Filament\Resources\EducationProgramResource\RelationManagers;
use App\Models\EducationProgram;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Storage;

class EducationProgramResource extends Resource
{
    protected static ?string $model = EducationProgram::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Освітні програми';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Назва програми')
                    ->required(),

                Select::make('level')
                    ->label('Рівень освіти')
                    ->options([
                        'Бакалавр' => 'Бакалавр',
                        'Магістр' => 'Магістр',
                        'Доктор філософії' => 'Доктор філософії',
                    ])
                    ->required(),

                Select::make('form')
                    ->label('Форма навчання')
                    ->options([
                        'Денна' => 'Денна',
                        'Заочна' => 'Заочна',
                    ])
                    ->required(),

                Textarea::make('description')
                    ->label('Опис програми')
                    ->rows(5)
                    ->required(),

                FileUpload::make('file_path')
                    ->label('PDF-файл освітньої програми')
                    ->directory('education-programs')
                    ->acceptedFileTypes(['application/pdf'])
                    ->enableOpen()
                    ->enableDownload()
                    ->maxSize(10240)
                    ->hint('Макс. 10MB, тільки PDF'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label('Назва')->searchable(),

                TextColumn::make('level')->label('Рівень'),
                TextColumn::make('form')->label('Форма'),

                TextColumn::make('file_path')
                    ->label('PDF')
                    ->url(fn ($record) => $record->file_path ? Storage::url($record->file_path) : null)
                    ->openUrlInNewTab()
                    ->formatStateUsing(fn ($state) => $state ? 'Відкрити PDF' : '—'),
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
            'index' => Pages\ListEducationPrograms::route('/'),
            'create' => Pages\CreateEducationProgram::route('/create'),
            'edit' => Pages\EditEducationProgram::route('/{record}/edit'),
        ];
    }
}
