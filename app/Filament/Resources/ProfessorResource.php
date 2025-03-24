<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProfessorResource\Pages;
use App\Models\Professor;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class ProfessorResource extends Resource
{
    protected static ?string $model = Professor::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $navigationLabel = 'Викладачі';
    protected static ?string $modelLabel = 'Викладач';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')
                ->label('ПІБ')
                ->required()
                ->maxLength(255)
                ->live(onBlur: true)
                ->afterStateUpdated(function ($state, callable $set) {
                    $set('slug', Str::slug($state));
                }),

            Forms\Components\TextInput::make('slug')
                ->label('Slug (URL)')
                ->required()
                ->disabled()
                ->dehydrated()
                ->maxLength(255),

            Forms\Components\TextInput::make('title')
                ->label('Посада')
                ->maxLength(255),

            Forms\Components\Select::make('degree_id')
                ->label('Науковий ступінь')
                ->relationship('degree', 'name')
                ->searchable()
                ->preload()
                ->required(),

            Forms\Components\TextInput::make('email')
                ->label('Email')
                ->email()
                ->maxLength(255),

            Forms\Components\TextInput::make('image')
                ->label('URL зображення')
                ->maxLength(255)
                ->helperText('Посилання на зображення викладача (опціонально)'),

            Forms\Components\Textarea::make('biography')
                ->label('Біографія')
                ->rows(5)
                ->nullable(),

            Forms\Components\Textarea::make('research_interests')
                ->label('Наукові інтереси')
                ->rows(5)
                ->nullable(),

            Forms\Components\Textarea::make('courses')
                ->label('Навчальні курси')
                ->rows(5)
                ->nullable(),

            Forms\Components\Textarea::make('publications')
                ->label('Публікації')
                ->rows(5)
                ->nullable(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('name')
                ->label('ПІБ')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('title')
                ->label('Посада')
                ->sortable(),

            Tables\Columns\TextColumn::make('degree.name')
                ->label('Ступінь')
                ->sortable(),

            Tables\Columns\TextColumn::make('email')
                ->label('Email')
                ->copyable()
                ->toggleable(),

            Tables\Columns\ImageColumn::make('image')
                ->label('Фото')
                ->rounded()
                ->height(50)
                ->width(50)
                ->toggleable(),
        ])
            ->actions([
                Tables\Actions\EditAction::make()->label('Редагувати'),
                Tables\Actions\DeleteAction::make()->label('Видалити'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()->label('Видалити вибране'),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProfessors::route('/'),
            'create' => Pages\CreateProfessor::route('/create'),
            'edit' => Pages\EditProfessor::route('/{record}/edit'),
        ];
    }
}
